//スプレッドシート
var spreadsheet = SpreadsheetApp.openById(getPropertyValue("SPREADSHEET"));
//LINEアクセストークン
var channel_access_token = getPropertyValue("CHANNEL_ACCESS_TOKEN");
//LINE REPLY API
var reply_api = getPropertyValue("LINE_REPLY_API");
//application_id
var application_id = getPropertyValue("APPLICATION_ID");

//include
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

//doGet
function doGet(e) {
  var uid = e.parameter.uid;
  if(!uid){
    return ContentService.createTextOutput("ng");
  };

  var regist=HtmlService.createTemplateFromFile("regist");
  regist.url = Utilities.formatString("https://script.google.com/macros/s/%s/exec?regist=%s",application_id,"off");
  regist.uid = e.parameter.uid;
  
  var output= regist.evaluate();
  output
    .setTitle("pink tiara 初回登録フォーム")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0')
  return output;
}

//顧客登録
function register(e) {
  //Log("postdata : [%1]", JSON.stringify(e));
  
  var content=doPostForSubmit(e);
  
  if(content){
    return {data: true};
  }else{
    return {data: false};
  }

}

//doPost（LineMessaging APIからのリクエスト or 初回登録フォームのポスト）
function doPost(e) {
  var webhookData = JSON.parse(e.postData.contents).events[0];
  
  //eventType
  var eventType = webhookData.type;  
  
  //user-id
  var sourceType = webhookData.source.type;
  var userid = webhookData.source.userId;
  
  var replyToken, message, data, dataString, day, dayString;
  replyToken = webhookData.replyToken;
  if(eventType === "message"){
    //メッセージデータ取得
    message = webhookData.message.text;
  }else if (eventType === "postback"){
    //ポストバックデータ取得
    data = JSON.parse(webhookData.postback.data);
    if(data){dataString = JSON.stringify(data);};
    
    day = webhookData.postback.params;
    if(day){
      dayString = day.date;
      var msg=data.message;
      data={
        "message": msg,
        "day": dayString.replace(/-/g,"/")
      };
    };
  }
  //log
  Log("eventType : [%1], replyToken : [%2], sourceType : [%3], userid : [%4], message : [%5], data : [%6], dayString : [%7]", eventType,replyToken,sourceType,userid,message,dataString,dayString);
  
  var returnmessage;
  
  //ユーザ認証
  if(!authenticate(userid)){

    returnmessage = {
      "type" : "text",
      "text" : Utilities.formatString(MSG_REGIST_REQUEST,application_id,userid)
    };
    //LINEへ返答
    return sendLineMessageFromReplyToken(replyToken,returnmessage);
  }
  if (eventType === "follow" || eventType === "unfollow" ){
    return;
  }
  
  //メッセージ取り出し
  if(data){
    message = data.message;
  };
  
  //顧客データ取得
  var customer=readCustomer(userid);
  //Log("顧客データ : [%1]",JSON.stringify(customer));
  
  //メッセージチェック
  var hasMsg=hasMessage(message);
  if(!hasMsg){
    
    //不正メッセージ
    Logger.log("登録メッセージなし：" + message);
    returnmessage = {
      "type" : "text",
      "text" : "送信されたメッセージは不正です"
    };
  }else{
    
    //正常メッセージ
    returnmessage = Controller(message,data,customer);

  };
  
 //LINEへ返答
 return sendLineMessageFromReplyToken(replyToken,returnmessage);
}


//Lineへ返答
function sendLineMessageFromReplyToken(token,replyText){
 var url = reply_api;
 var headers = {
   "Content-Type" : "application/json; charset=UTF-8",
   "Authorization" : "Bearer " + channel_access_token
 };
 var postData = {
   "replyToken" : token,
   "messages" : [replyText]
 };
  
 var options = {
   "method" : "POST",
   "headers" : headers,
   "payload" : JSON.stringify(postData)
 };
 return UrlFetchApp.fetch(url, options);  
}


/////////////テストコード

function doGetTest(){
  var e={
    "parameter":{
      "uid":"12345678"
    }
  };  
  var contents = doGet(e);
  Logger.log(contents.getContent());
  
}


//Postのテスト用
function doPostTest(){

  var data={
    "customer" : {     
      "customerId": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", //お客さまID
      "lastName": "大脇", //姓
      "firstName": "慶子", //名
      "lastNameKana": "オオワキ", //姓カナ
      "firstNameKana": "ヨシコ", //名カナ
      "phone": "09012345678", //電話番号
      "mail": "test@gmail.com", //メールアドレス
    }
  };
  
  //パラメータの作成
  var e = {
    "parameter" : {
      "regist":"on"
    },
    "postData" : {
      "contents" : JSON.stringify(data)
    }
  };

 doPost(e);
}