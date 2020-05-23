/////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 管理機能
//// 用途①：オーナー予定ありの場合、予約受付不可（ステータス：予約不可）とする
//// 用途②：何らかの理由でカレンダが欠損した場合、台帳からカレンダを登録する（ステータス：予約済み）

function setOwnerReserved(){
  //指定した台帳Noリストを指定
  var list=[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
  
  //カレンダ登録：type => regist
  var count=updateGoogleCalendarFromLedger("regist",list); 
  //↑
  //どちらか一方をコメントはずして実行ください
  //↓
  //カレンダ削除：type => delete
  //var count=updateGoogleCalendarFromLedger("delete",list);
  
  Logger.log(Utilities.formatString("%s件更新しました", count));  
}

function updateGoogleCalendarFromLedger(type,list){

  var arr = new Array();
  for(var i = 0; i <= list.length -1; i++) {
    arr.push(readLedgerWithNo(list[i]));
  }
  
  var i=0;
  arr.forEach(function( ledger ) {
    i=i+1;
    if(type==="regist"){
      //カレンダ登録
      var evtId=createEvent("【予約不可】","",ledger);
      ledger.googleCalendarId=evtId;
      ledger.status="予約不可";　//予約不可 or 予約済み

    }else if(type==="delete"){
      //カレンダ削除
      deleteEvent(ledger.googleCalendarId);
      ledger.googleCalendarId="-";
      ledger.status="キャンセル";
    }
    //台帳更新
    UpdateLedger(ledger);    
  });
  
  return i;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
