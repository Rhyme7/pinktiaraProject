/////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 管理機能
//// 用途：オーナー予定ありの場合、予約受付不可とする
//// 方法：予め台帳に対象日付、開始時間、終了時間を設定し、お客さまIDやGoogleカレンダIDは未入力で以下メソッドを実行

function setOwnerReserved(){
  //指定した台帳Noリストを指定
  var list=[x,x,x,x,x];
  
  //カレンダ登録：type => regist
  var count=updateGoogleCalendarFromLedger("regist",list); 
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
      var evtId=createEvent("【予約不可】",ledger);
      ledger.googleCalendarId=evtId;
      ledger.status="予約不可";

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
