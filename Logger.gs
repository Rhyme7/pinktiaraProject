function Log(target,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10) {
  
  if(isLogging === "n") return;
  var sheet = spreadsheet.getSheetByName('log');
  
  var now=Moment.moment().format("YYYY/MM/DD HH:mm:ss");

  var PARAM1="%1";
  var PARAM2="%2";
  var PARAM3="%3";
  var PARAM4="%4";
  var PARAM5="%5";
  var PARAM6="%6";
  var PARAM7="%7";
  var PARAM8="%8";
  var PARAM9="%9";
  var PARAM10="%10";
  
  var rep=target.replace(PARAM1, s1).replace(PARAM2, s2).replace(PARAM3, s3).replace(PARAM4, s4).replace(PARAM5, s5).replace(PARAM6, s6).replace(PARAM6, s6).replace(PARAM7, s7).replace(PARAM7, s7).replace(PARAM8, s8).replace(PARAM9, s9).replace(PARAM10, s10);
  
  sheet.appendRow([now + "," + rep]);
}

function LogClear(){
 var sheet = spreadsheet.getSheetByName('log');
 sheet.clear();
}

function LogTest(){
 Log("eventType : [%1], replyToken : [%2], sourceType : [%3], userid : [%4], message : [%5], data : [%6], dayString : [%7]", "a","b","c","d","e","f","g");
}

