//1.台帳No
//2.お客さまID
//3.記録日時
//4.予約日
//5.予約日時From
//6.予約日時To
//7.メニューコード
//8.コースコード
//9.ステータス
//10.GoogleカレンダID
//11.作成日時
//12.作成者
//13.更新者
//14.更新日時

//台帳へ書き込み
function WriteLedger(ledger){
  var sheet = spreadsheet.getSheetByName('予約台帳');
  var lastRow = sheet.getLastRow() + 1;
  
  if(!sheet.getRange(lastRow, 1).getValue()){
    var createNo=sheet.getRange(lastRow-1,1).getValue();
    if(!isFinite(createNo)){
      createNo=0;
    }
    createNo=createNo+1;
    sheet.getRange(lastRow, 1).setValue(createNo);
    sheet.getRange(lastRow, 2).setValue(ledger.customerId);
    sheet.getRange(lastRow, 3).setValue(ledger.date);
    sheet.getRange(lastRow, 4).setValue(ledger.reserveDate);
    sheet.getRange(lastRow, 5).setValue(ledger.reserveFromTime);
    sheet.getRange(lastRow, 6).setValue(ledger.reserveToTime);
    sheet.getRange(lastRow, 7).setValue(ledger.selectMenu);
    sheet.getRange(lastRow, 8).setValue(ledger.selectCourse);
    sheet.getRange(lastRow, 9).setValue(ledger.status);
    sheet.getRange(lastRow, 11).setValue(Moment.moment().format("YYYY/MM/DD HH:mm:ss"));
    sheet.getRange(lastRow, 12).setValue(ledger.customerId);
  }
  return createNo;
}

//台帳へ更新
function UpdateLedger(ledger){
  var sheet = spreadsheet.getSheetByName('予約台帳');
  var lastRow = sheet.getLastRow();
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 1).getValue() === ledger.ledgerNo){
      if(ledger.status){
        sheet.getRange(i, 9).setValue(ledger.status);
      }
      if(ledger.googleCalendarId){
        sheet.getRange(i, 10).setValue(ledger.googleCalendarId);
      }
      sheet.getRange(i, 13).setValue(Moment.moment().format("YYYY/MM/DD HH:mm:ss"));
      sheet.getRange(i, 14).setValue(ledger.customerId);
      return;
    }
  }
}

//台帳取り出し
function readLedger(customerId){
  var sheet = spreadsheet.getSheetByName('予約台帳');
  var lastRow = sheet.getLastRow();
  var ledger;
  
  var arr= new Array();
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 2).getValue() === customerId){       
      ledger=getLedgerObject();
      ledger.ledgerNo=sheet.getRange(i, 1).getValue();
      ledger.customerId=sheet.getRange(i, 2).getValue();
      ledger.date=Moment.moment(sheet.getRange(i, 3).getValue()).format("YYYY/MM/DD HH:mm:ss");
      ledger.reserveDate=Moment.moment(sheet.getRange(i, 4).getValue()).format("YYYY/MM/DD");
      ledger.reserveFromTime=Moment.moment(sheet.getRange(i, 5).getValue()).format("HH:mm");
      ledger.reserveToTime=Moment.moment(sheet.getRange(i, 6).getValue()).format("HH:mm");
      ledger.selectMenu=sheet.getRange(i, 7).getValue();
      ledger.selectCourse=sheet.getRange(i, 8).getValue();
      ledger.status=sheet.getRange(i, 9).getValue();
      ledger.googleCalendarId=sheet.getRange(i, 10).getValue();
      arr.push(ledger);
    }
  }
  return arr;
}

//台帳取り出し
function readLedgerWithNo(ledgerNo){
  var sheet = spreadsheet.getSheetByName('予約台帳');
  var lastRow = sheet.getLastRow();
  var ledger;
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 1).getValue() === ledgerNo){       
      ledger=getLedgerObject();
      ledger.ledgerNo=sheet.getRange(i, 1).getValue();
      ledger.customerId=sheet.getRange(i, 2).getValue();
      ledger.date=Moment.moment(sheet.getRange(i, 3).getValue()).format("YYYY/MM/DD HH:mm:ss");
      ledger.reserveDate=Moment.moment(sheet.getRange(i, 4).getValue()).format("YYYY/MM/DD");
      ledger.reserveFromTime=Moment.moment(sheet.getRange(i, 5).getValue()).format("HH:mm");
      ledger.reserveToTime=Moment.moment(sheet.getRange(i, 6).getValue()).format("HH:mm");
      ledger.selectMenu=sheet.getRange(i, 7).getValue();
      ledger.selectCourse=sheet.getRange(i, 8).getValue();
      ledger.status=sheet.getRange(i, 9).getValue();
      ledger.googleCalendarId=sheet.getRange(i, 10).getValue();
      return ledger;
    }
  }
  return ledger;
}

//UpdateLedgerTest
function UpdateLedgerTest(){
  var updLedger=getLedgerObject();
  updLedger.ledgerNo=4;
  updLedger.googleCalendarId="abc@gmail.com";
  UpdateLedger(updLedger);
}

//readLedgerTest
function readLedgerTest(){
  var list=readLedger("U5b22be70377b7e9aca78f8a6ae04a6e5");
  Logger.log(JSON.stringify(list));
  
}

//readLedgerWithNoTest
function readLedgerWithNoTest(){
  var ledger=readLedgerWithNo(8);
  Logger.log(JSON.stringify(ledger));
  
}