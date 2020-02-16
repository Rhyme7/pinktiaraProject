//前方一致
function startsWith(target, pattern) {
  return target.indexOf(pattern) === 0; 
}

//getPropertyValueTest
function getPropertyValueTest(){
  var val=getPropertyValue("SPREADSHEET");
  Logger.log(val);
}

//KEY-VALUE
function getPropertyValue(KEY) {
  var VALUE = PropertiesService.getScriptProperties().getProperty(KEY);
  
  if(VALUE === null){
    //取得できない場合はlog出力
    Log("KEY-VALUE取得できない : [%1]",KEY);
    return null;
  };
  
  return VALUE;
}

function YMDHMS(target) {
  if(target){
    return Moment.moment(target).format("YYYY/MM/DD HH:mm:ss");
  }else{
    return Moment.moment().format("YYYY/MM/DD HH:mm:ss");
  }
}

function YMDHM(target) {
  if(target){
    return Moment.moment(target).format("YYYY/MM/DD HH:mm");
  }else{
    return Moment.moment().format("YYYY/MM/DD HH:mm");
  }
}

function YMD(target) {
  if(target){
    return Moment.moment(target).format("YYYY/MM/DD");
  }else{
    return Moment.moment().format("YYYY/MM/DD");
  }
}

function HMS(target) {
  if(target){
    return Moment.moment(target).format("HH:mm:ss");
  }else{
    return Moment.moment().format("HH:mm:ss");
  }
}

function HM(target) {
  if(target){
    return Moment.moment(target).format("HH:mm");
  }else{
    return Moment.moment().format("HH:mm");
  }
}