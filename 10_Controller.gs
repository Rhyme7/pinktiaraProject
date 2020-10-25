//コントローラーの役割
function Controller(message, data, customer) {
  //メッセージに応じて処理
  //機能別コントローラへ割り振る
  var returnmessage;
  
  var cId=customer.customerId;
  var cName=customer.lastName+customer.firstName;
  var cPhone=customer.phone;
  
  if(message.indexOf("10_") === 0){
  //登録メッセージ
  //機能ID：10_
    
    //returnmessage = 
  }else if(message.indexOf("20_") === 0){
  //メニューを取得する
  //機能ID：20_
    
    switch (message) {
      case MSG_CMD20_GET_MENU:
        returnmessage = getTopMenu(cId);
        return returnmessage;
      case MSG_CMD20_EXT_MENU:
        returnmessage = getMenuDetail("M1","まつ毛エクステメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg");
        break
      case MSG_CMD20_PRM_MENU:
        returnmessage = getMenuDetail("M2","まつ毛パーマメニュー","https://drive.google.com/uc?export=view&id=11e3yF2IoD1oso3u0iG8oNJp0foXIzsb8");
        break
      case MSG_CMD20_OTR_MENU:
        returnmessage = getMenuDetail("M3","おすすめメニュー","https://drive.google.com/uc?export=view&id=1VVG2kpXAZuTpe_8Bv8UwXfH2-jnwrWG8");
        break
      case MSG_CMD20_MNG_MENU:
        returnmessage = getMenuDetail("M99","管理者メニュー","https://drive.google.com/uc?export=view&id=1_HlZXax1b1dwpU-U60I0_Qs2_9si72Oz");
        break        
      default:
        returnmessage = {
          "type" : "text",
          "text" : "あなたが送信したメッセージは：" + message
        };      
        break
    }
    
    //カルテ書き込み
    var carteData = getCarteObjectWithValue("予約受付",Moment.moment().format("YYYY/MM/DD HH:mm:ss"),cId,cName,data.menu);
    UpdateCarte(carteData);
    
  }else if(message.indexOf("30_") === 0){
  //予約（予約空き状況確認/日程選択/空き状況一覧取得/カレンダ登録/結果表示）
  //機能ID：30_
    
    //カルテ呼び出し
    var carte=readCarte("予約受付", cId);
    var ledger=carte.ledger;
    
    switch (message) {
      case MSG_CMD30_CHECK_AVAILABILITY:
        ledger.selectCourse=data.course;
        returnmessage = getSelectDateDialog();
        break
      case MSG_CMD30_SELECTED_DATE:
        ledger.reserveDate=data.day;
        returnmessage = getAvailabilityList(ledger);
        break
      case MSG_CMD30_SELECTED_TIME:
        ledger.reserveFromTime=data.from;
        ledger.reserveToTime=data.to;
        returnmessage = getConfirmReserved(ledger);
        break
      case MSG_CMD30_CONFIRM_LAST:
        if(data.yn === "y"){
          
          ledger.reserveDate=data.date;          
          ledger.reserveFromTime=data.from;
          ledger.reserveToTime=data.to;
          ledger.status="予約済み";
          returnmessage = getResultReserved(carte);
          
          //台帳書き込み
          var ledgerno=WriteLedger(ledger);
          ledger.ledgerNo=ledgerno;
          carte.resultLastConfirm=true;
          
          var registed=readLedgerWithNo(ledgerno);
          
          //カレンダ登録
          var evtId=createEvent(cName,cPhone,registed);
          ledger.googleCalendarId=evtId;
          //台帳更新
          UpdateLedger(ledger);
          carte.resultCalendar=true;
        }
        break        
      default:
        returnmessage = {
          "type" : "text",
          "text" : "不正なメッセージです：" + message
        };      
        break
    }
    
    if(carte && ledger){
      //カルテ更新
      UpdateCarte(carte);
    }
    
  }else if(message.indexOf("40_") === 0){
  //予約確認（予約一覧取得/結果表示）
  //機能ID：40_
    
    returnmessage = getReservedResult(cId,cName);
    return returnmessage;
    
  }else if(message.indexOf("50_") === 0){
  //予約キャンセル（予約一覧取得/カレンダ更新/結果表示）
  //機能ID：50_
    
    switch (message) {
      case MSG_CMD50_CANCEL_RESERVED:
        returnmessage = getCancelList(cId,cName);
        return returnmessage;
        break;
      case MSG_CMD50_CANCEL_SELECTED:
        //カルテ書き込み
        var carteData = getCarteObjectWithValue("キャンセル受付",Moment.moment().format("YYYY/MM/DD HH:mm:ss"),cId,cName);
        var ledger=readLedgerWithNo(data.ledgerNo);
        carteData.ledger=ledger;
        carteData.ledger.status="キャンセル";
        Log("MSG_CMD50_CANCEL_SELECTED1 : [%1]", JSON.stringify(carteData));
        UpdateCarte(carteData);
        
        returnmessage = getConfirmCancel(ledger);
        return returnmessage;
        break;
      case MSG_CMD50_CONFIRM_LAST:
        Log("MSG_CMD50_CONFIRM_LAST1 : [%1]", cId);
        //カルテ呼び出し
        var carte=readCarte("キャンセル受付", cId);
        Log("MSG_CMD50_CONFIRM_LAST2 : [%1]", JSON.stringify(carte));
        //指定された台帳呼び出し
        var ledger=readLedgerWithNo(data.ledgerNo);
        Log("MSG_CMD50_CONFIRM_LAST3 : [%1]", JSON.stringify(ledger));
        carte.ledger=ledger;
        carte.ledger.status="キャンセル";
        
        if(data.yn === "y"){
          returnmessage = getResultCanceled(carte);
          Log("MSG_CMD50_CONFIRM_LAST4 : [%1]", JSON.stringify(carte));

          //カレンダ更新
          updateEvent(carte.ledger.googleCalendarId);
          carte.resultCalendar=true;
          Log("MSG_CMD50_CONFIRM_LAST5 : [%1]", JSON.stringify(carte));
          UpdateCarte(carte);
          Log("MSG_CMD50_CONFIRM_LAST6 : [%1]", JSON.stringify(carte));

          //台帳更新
          UpdateLedger(carte.ledger);
          carte.resultLastConfirm=true;
          UpdateCarte(carte);
          Log("MSG_CMD50_CONFIRM_LAST7 : [%1]", JSON.stringify(carte));
          
        }
        break;
      default:
        returnmessage = {
          "type" : "text",
          "text" : "不正なメッセージです：" + message
        };      
        break
    }
    
  }else{
    return;
  };
 
  return returnmessage;
}
