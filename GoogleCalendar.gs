//Googleカレンダへ登録
function createEvent(customerName, phone, ledger) {
  var calendar = CalendarApp.getDefaultCalendar();
  var title = Utilities.formatString("%s様[%s]（%s : %s : %s分 : %s円）",customerName, phone,ledger.selectMenu,ledger.selectCourse,ledger.duration,ledger.amount);
  var startTime = new Date(ledger.reserveDate+" "+ledger.reserveFromTime);
  var endTime = new Date(ledger.reserveDate+" "+ledger.reserveToTime);
  
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
  var ledger=getLedgerObject();

  ledger.customerId="test"
  ledger.date=Moment.moment("2020/02/17 2:34:50").format("YYYY/MM/DD HH:mm:ss");
  ledger.reserveDate=Moment.moment("2020/02/21").format("YYYY/MM/DD");
  ledger.reserveFromTime=Moment.moment("10:00").format("HH:mm");
  ledger.reserveToTime=Moment.moment("11:00").format("HH:mm");
  ledger.selectMenu="M2";
  ledger.selectCourse="P1-2";
  ledger.status="予約済み";
  
  var evtId=createEvent("大脇 剣吾","",ledger)
  Logger.log("イベントID：%s", evtId);
}


//updateEventTest
function updateEventTest(){
  updateEvent("5j3gave2d9pef0moctbqoe3bl0@google.com")
}
