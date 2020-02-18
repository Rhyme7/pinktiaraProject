//コントローラーの役割
function Controller(message, data, customer) {
  //メッセージに応じて処理
  //機能別コントローラへ割り振る
  var returnmessage;
  
  var cId=customer.customerId;
  var cName=customer.lastName+customer.firstName;
  
  if(message.indexOf("10_") === 0){
  //登録メッセージ
  //機能ID：10_
    
    //returnmessage = 
  }else if(message.indexOf("20_") === 0){
  //メニューを取得する
  //機能ID：20_
    
    switch (message) {
      case MSG_CMD20_GET_MENU:
        returnmessage = getTopMenu();
        return returnmessage;
      case MSG_CMD20_EXT_MENU:
        returnmessage = getExteMenuDetail();
        break
      case MSG_CMD20_PRM_MENU:
        returnmessage = getPermMenuDetail();
        break
      case MSG_CMD20_OTR_MENU:
        returnmessage = getOtherMenuDetail();
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
          var evtId=createEvent(cName,registed);
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
        
      case MSG_CMD50_CANCEL_SELECTED:
        //カルテ書き込み
        var carteData = getCarteObjectWithValue("キャンセル受付",Moment.moment().format("YYYY/MM/DD HH:mm:ss"),cId,cName);
        var ledger=readLedgerWithNo(data.ledgerNo);
        carteData.ledger=ledger;
        carteData.ledger.status="キャンセル";
        UpdateCarte(carteData);
        
        returnmessage = getConfirmCancel(ledger);
        break
        
      case MSG_CMD50_CONFIRM_LAST:
        
        //カルテ呼び出し
        var carte=readCarte("キャンセル受付", cId);
        //指定された台帳呼び出し
        var ledger=readLedgerWithNo(data.ledgerNo);
        carte.ledger=ledger;
        carte.ledger.status="キャンセル";
        
        if(data.yn === "y"){
          returnmessage = getResultCanceled(carte);

          //カレンダ更新
          updateEvent(carte.ledger.googleCalendarId);
          carte.resultCalendar=true;
          UpdateCarte(carte);
          
          //台帳更新
          UpdateLedger(carte.ledger);
          carte.resultLastConfirm=true;
          UpdateCarte(carte);
        }
        break        
      default:
        returnmessage = {
          "type" : "text",
          "text" : "不正なメッセージです：" + message
        };      
        break
    }
    
  }else{
    returnmessage = {
      "type" : "text",
      "text" : "不正なメッセージです：" + message
    };
  };
 
  return returnmessage;
}
