//1.問合せ種別
//2.応対日時
//3.お客さまID
//4.お客さま名
//5.台帳オブジェクト
//6.最終確認結果
//7.カレンダ反映結果

//カルテへ書き込み
function WriteCarte(carte){
  var sheet = spreadsheet.getSheetByName('カルテ');
  var lastRow = sheet.getLastRow() + 1;
  
  if(!sheet.getRange(lastRow, 1).getValue()){ 
    sheet.getRange(lastRow, 1).setValue(carte.type);
    sheet.getRange(lastRow, 2).setValue(carte.date);
    sheet.getRange(lastRow, 3).setValue(carte.customerId);
    sheet.getRange(lastRow, 4).setValue(carte.customerName);
    sheet.getRange(lastRow, 5).setValue(JSON.stringify(carte.ledger));
    sheet.getRange(lastRow, 6).setValue(carte.resultLastConfirm);
    sheet.getRange(lastRow, 7).setValue(carte.resultCalendar)
  }
  return;
}

//カルテへ更新
function UpdateCarte(carte){
  var sheet = spreadsheet.getSheetByName('カルテ');
  var lastRow = sheet.getLastRow();
  
  for(var i = 2; i <= lastRow; i++) {    
    if(sheet.getRange(i, 1).getValue() === carte.type && sheet.getRange(i, 3).getValue() === carte.customerId && !sheet.getRange(i, 6).getValue()){
      sheet.getRange(i, 1).setValue(carte.type);
      sheet.getRange(i, 2).setValue(Moment.moment().format("YYYY/MM/DD HH:mm:ss"));
      sheet.getRange(i, 3).setValue(carte.customerId);
      sheet.getRange(i, 4).setValue(carte.customerName);
      sheet.getRange(i, 5).setValue(JSON.stringify(carte.ledger));
      sheet.getRange(i, 6).setValue(carte.resultLastConfirm);
      sheet.getRange(i, 7).setValue(carte.resultCalendar)
      return;
    }
  }
  
  //存在しない場合は新規書き込み
  WriteCarte(carte);
}

//カルテ取り出し
function readCarte(type, customerId){
  var sheet = spreadsheet.getSheetByName('カルテ');
  var lastRow = sheet.getLastRow();
  var carte=getCarteObject();
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 1).getValue() === type && sheet.getRange(i, 3).getValue() === customerId && !sheet.getRange(i, 6).getValue()){
      carte.type=sheet.getRange(i, 1).getValue();
      carte.date=Moment.moment(sheet.getRange(i, 2).getValue()).format("YYYY/MM/DD HH:mm:ss");
      carte.customerId=sheet.getRange(i, 3).getValue();
      carte.customerName=sheet.getRange(i, 4).getValue();
      carte.ledger=JSON.parse(sheet.getRange(i, 5).getValue());
      carte.resultLastConfirm=sheet.getRange(i, 6).getValue();
      carte.resultCalendar=sheet.getRange(i, 7).getValue();
      return carte;
    }
  }
}