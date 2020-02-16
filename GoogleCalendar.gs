//Googleカレンダへ登録
function createEvent(customerName, date, fromtime, totime) {
  var calendar = CalendarApp.getDefaultCalendar();
  var title = customerName+"様　ご予約";
  var startTime = new Date(date+" "+fromtime);
  var endTime = new Date(date+" "+totime);
  
  var evtCal=calendar.createEvent(title, startTime, endTime);
  var evtId = evtCal.getId();
  return evtId;
}


//Googleカレンダを更新
function updateEvent(evtId) {
  var calendar = CalendarApp.getDefaultCalendar();
  var evtCal = calendar.getEventById(evtId);
  evtCal.setTitle("【キャンセル】" + evtCal.getTitle());
  
  var color = CalendarApp.EventColor.GRAY;
  evtCal.setColor(color);  
}

//Googleカレンダ削除
function deleteEvent(evtId) {
  var calendar = CalendarApp.getDefaultCalendar();
  var evtCal = calendar.getEventById(evtId);
  evtCal.deleteEvent();
}



//createEventTest
function createEventTest(){
  var evtId=createEvent("大脇 剣吾","2020/02/14","10:00","11:00")
  Logger.log("イベントID：%s", evtId);
}


//updateEventTest
function updateEventTest(){
  updateEvent("5j3gave2d9pef0moctbqoe3bl0@google.com")
}
