//1.No
//2.お客さまID
//3.姓
//4.名
//5.姓カナ
//6.名カナ
//7.電話番号
//8.メールアドレス
//9.生年月日
//10.認証済み

//顧客へ新規登録
function CreateCustomer(customer){
   
  var sheet = spreadsheet.getSheetByName('顧客');
  var lastRow = sheet.getLastRow() + 1;
  
  if(!sheet.getRange(lastRow, 1).getValue()){
    
    var createNo=sheet.getRange(lastRow-1,1).getValue();
    if(!isFinite(createNo)){
      createNo=100000;
    }
    createNo=createNo+1;
    sheet.getRange(lastRow, 1).setValue(createNo);
    sheet.getRange(lastRow, 2).setValue(customer.customerId);
    sheet.getRange(lastRow, 3).setValue(customer.lastName);
    sheet.getRange(lastRow, 4).setValue(customer.firstName);
    sheet.getRange(lastRow, 5).setValue(customer.lastNameKana);
    sheet.getRange(lastRow, 6).setValue(customer.firstNameKana);
    sheet.getRange(lastRow, 7).setValue(String(customer.phone))
    sheet.getRange(lastRow, 8).setValue(customer.mail)
    sheet.getRange(lastRow, 9).setValue(customer.birth)
    sheet.getRange(lastRow, 10).setValue(customer.authenticated)
    sheet.getRange(lastRow, 11).setValue(Moment.moment().format("YYYY/MM/DD HH:mm:ss"));
  }
  return;
}

//顧客へアップデート
function UpdateCustomer(customer){
  var sheet = spreadsheet.getSheetByName('顧客');
  var lastRow = sheet.getLastRow();
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 1).getValue() === customer.no){
      
      sheet.getRange(i, 2).setValue(customer.customerId);

      if(!sheet.getRange(i, 7).getValue()){
        sheet.getRange(i, 7).setValue(String(customer.phone));
      }
      if(!sheet.getRange(i, 8).getValue()){
        sheet.getRange(i, 8).setValue(customer.mail);
      }      
      
      sheet.getRange(i, 10).setValue(customer.authenticated);
      sheet.getRange(i, 11).setValue(Moment.moment().format("YYYY/MM/DD HH:mm:ss"));
      return;
    }
  }
  return;
}

//顧客取り出し
function readCustomer(customerId){
  var sheet = spreadsheet.getSheetByName('顧客');
  var lastRow = sheet.getLastRow();
  var customer=getCustomerObject();
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 2).getValue() === customerId){
      customer.no=sheet.getRange(i, 1).getValue();
      customer.customerId=sheet.getRange(i, 2).getValue();
      customer.lastName=sheet.getRange(i, 3).getValue();
      customer.firstName=sheet.getRange(i, 4).getValue();
      customer.lastNameKana=sheet.getRange(i, 5).getValue();
      customer.firstNameKana=sheet.getRange(i, 6).getValue();
      customer.phone=sheet.getRange(i, 7).getValue();
      customer.mail=sheet.getRange(i, 8).getValue();
      customer.birth=sheet.getRange(i, 9).getValue();
      customer.authenticated=sheet.getRange(i, 10).getValue();
      return customer;
    }
  }
}

//顧客取り出し（名前）
function readCustomerWithName(lastname,firstname){
  var sheet = spreadsheet.getSheetByName('顧客');
  var lastRow = sheet.getLastRow();
  var customer=getCustomerObject();
  
  for(var i = 2; i <= lastRow; i++) {
    if(sheet.getRange(i, 3).getValue() === lastname &&
       sheet.getRange(i, 4).getValue() === firstname){
      customer.no=sheet.getRange(i, 1).getValue();
      customer.customerId=sheet.getRange(i, 2).getValue();
      customer.lastName=sheet.getRange(i, 3).getValue();
      customer.firstName=sheet.getRange(i, 4).getValue();
      customer.lastNameKana=sheet.getRange(i, 5).getValue();
      customer.firstNameKana=sheet.getRange(i, 6).getValue();
      customer.phone=sheet.getRange(i, 7).getValue();
      customer.mail=sheet.getRange(i, 8).getValue();
      customer.birth=sheet.getRange(i, 9).getValue();
      customer.authenticated=sheet.getRange(i, 10).getValue();
      return customer;
    }
  }
}

//ユーザ認証
function authenticate(customerId){
  // 顧客検索
  var customer=readCustomer(customerId);
  
  //顧客が存在しないまたは未認証の場合はNG
  if(!customer){
    return false;
  }
  if(!customer.authenticated){
    return false; 
  }
  
  return true;
}

//顧客へ書き込み
function WriteCustomer(customer){
  
  // 顧客検索
  var data=readCustomer(customer.customerId);
  if(!data){
    data=readCustomerWithName(customer.lastName,customer.firstName);
  }
  
  //顧客が存在しない場合は新規
  customer.no=0;
  customer.authenticated=true;
  
  if(!data){
    CreateCustomer(customer);
  }else{
    customer.no=data.no;
    UpdateCustomer(customer);
  }
  
  return true;
}

///////テストコード
function authenticateTest(){
  var ret= authenticate("U5b22be70377b7e9aca78f8a6ae04a6e5");
  Logger.log(ret);
}