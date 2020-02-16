//function register(lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid) {
//  asyncRegist(lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid)
//  return {data: true};
//}

function doPostForSubmit(postdata){
  var ret=checkParams(postdata);
  if(!ret){
    return false;
  };
  
  var sheet = spreadsheet.getSheetByName("初回登録フォーム回答");
  
  var time=new Date();
  
  Log("postdata : [%1]", JSON.stringify(postdata));
  
  var lastName=postdata.parameters.lastName.toString();
  var firstName=postdata.parameters.firstName.toString();
  var lastNameKana=postdata.parameters.lastNameKana.toString();
  var firstNameKana=postdata.parameters.firstNameKana.toString();
  var phone=postdata.parameters.phone.toString();
  var mail=postdata.parameters.mail.toString();
  var uid=postdata.parameters.customerId.toString();
  Log("phone : [%1]", JSON.stringify(phone));
  sheet.appendRow([time,lastName,firstName,lastNameKana,firstNameKana,""+String(phone),mail,uid]);

  return WriteCustomer(postdata.parameters);
  
//非同期を実現するために、キャッシュサービス（CacheService）を使用したが、遅いため使用しない
//以下処理は実質使用していない
//addJobQue
//timeDrivenFunction（←定期実行トリガをはずした方がよい）
  
//  //ジョブへ追加
//  addJobQue(lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid);
  
//  return true;

}

function checkParams(postdata){
  var lastName = postdata.parameters.lastName;
  var firstName = postdata.parameters.firstName;
  var lastNameKana = postdata.parameters.lastNameKana;
  var firstNameKana = postdata.parameters.firstNameKana;
  var phone = postdata.parameters.phone;
  var mail = postdata.parameters.mail;
  var uid = postdata.parameters.customerId;
  
  //Log("lastName : [%1], firstName : [%2], lastNameKana : [%3], firstNameKana : [%4], phone : [%5], mail : [%6], uid : [%7]", lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid);
  
  if (!lastName || !firstName || !lastNameKana || !firstNameKana || !phone || !uid){
    return false;
  }
  
  return true;
}

//ジョブ追加
function addJobQue(lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid){
  //引数をオブジェクトとしてまとめる
  var newQue = {
    "lastName": lastName,
    "firstName": firstName,
    "lastNameKana": lastNameKana,
    "firstNameKana": firstNameKana,
    "phone": phone,
    "mail": mail,
    "uid": uid
  }

  cache = CacheService.getScriptCache();
  var data = cache.get("key");

  //cacheの中身がnullならば空配列に，nullでないならstrを配列に変換する.
  if(data==null){
    data = [];
  }else{
    data = data.split(';');
  }

  //オブジェクトであるnewDataをstrに変換して配列に追加.
  data.push(JSON.stringify(newQue));

  //配列を;で分割するstrに変換.
  cache.put("key", data.join(';'), 60*5); 

  return;
}

//定期実行
function timeDrivenFunction(){
  //cacheを取得
  cache = CacheService.getScriptCache();
  var data = cache.get("key");

  //cacheの読み書きの競合が怖いのでなるべく早く消しておく
  cache.remove("key");

  //cacheの中身がnullならば空配列に，nullでないならstrを配列に変換.
  if(data==null){
    return;
  }else{
    data = data.split(';');
  }

  //配列の中身をstrからJSON(object)に戻し，処理を実行する
  for(var i=0; i<data.length; i++){
    data[i] = JSON.parse(data[i]);
    asyncRegist(data[i].lastName, data[i].firstName, data[i].lastNameKana, data[i].firstNameKana, data[i].phone, data[i].mail, data[i].uid);
  }
  return;
}

//非同期で実行される
function asyncRegist(lastName,firstName,lastNameKana,firstNameKana,phone,mail,uid){
  //顧客登録
  var url = Utilities.formatString("https://script.google.com/macros/s/%s/exec?regist=%s",application_id,"on");
  var postData = {
    "customer" : {     
      "customerId": uid, //お客さまID
      "lastName": lastName, //姓
      "firstName": firstName, //名
      "lastNameKana": lastNameKana, //姓カナ
      "firstNameKana": firstNameKana, //名カナ
      "phone": phone, //電話番号
      "mail": mail, //メールアドレス
    }
  };
  
  var options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(postData),
    muteHttpExceptions: true,
  }
  
  var ret = UrlFetchApp.fetch(url, options);
  if(ret.getContent()){
    return true;
  }else{
    return false;
  }
}

/////////////テストコード

function doPostForSubmitTest(){
  var e={
    "parameters":{
      "lastName":"あ",
      "firstName":"い",
      "lastNameKana":"ア",
      "firstNameKana":"イ",
      "phone":"09011112222",
      "mail":"ccc@gmail.com",
      "lineUserId":"aaaaaaaaaaa"
    }
  };
  Logger.log(e);
  
  doPostForSubmit(e);
}