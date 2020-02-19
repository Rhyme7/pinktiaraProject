//空き状況リスト
function getAvailabilityList(ledger) {
  
  //予約日から営業時間を取得
  var businessTime=getBusinessTime(ledger.reserveDate);
  //コースから施術時間を取得
  var course=getCourse(ledger.selectCourse);

  //予約可能リストを作成(30分刻み)
  var reservableList=new Array();
  var base=Moment.moment(ledger.reserveDate + " " + businessTime.from);

  for(var i = 1; i <= 50; i++) {
    var time=getBusinessTimeObject();
    time.from =base.format("YYYY/MM/DD HH:mm");
    time.to =Moment.moment(time.from).add(course.duration,"m").format("YYYY/MM/DD HH:mm");
    
    //営業時間内の間は予約可能として追加する
    if(Moment.moment(time.to).isAfter(Moment.moment(ledger.reserveDate + " " + businessTime.to))){
      break;
    }else{
      reservableList.push(time);
      //★★ 30分刻み ★★
      base=Moment.moment(time.from).add(30,"m");
    }
  }
//  Logger.log(JSON.stringify(reservableList));
  
  //予約済み一覧を取得
  var reservedList=readLedgerWithDate(ledger.reserveDate);
  reservedList.sort(function(a,b){return(new Date(a.reserveDate+" "+a.reserveFromTime) - new Date(b.reserveDate+" "+b.reserveFromTime));});
//  Logger.log(JSON.stringify(reservedList));
  
  //空き時間リスト作成
  var availabilityList=new Array();
  //予約可能リストより1件ずつ取り出し、予約済み一覧と比較
  //以下条件を満たす場合、空き時間リストへ追加
  //　可能アイテム終了時刻≦予約済アイテム開始時刻
  //  OR
  //　可能アイテム開始時刻≧予約済アイテム終了時刻
  reservableList.forEach(function( available ) {
    
    var ret=true;
    reservedList.forEach(function( reserved ) {

    if(!((new Date(available.to) <= new Date(reserved.reserveDate + " " + reserved.reserveFromTime)) || 
         (new Date(available.from) >= new Date(reserved.reserveDate + " " + reserved.reserveToTime)))){
      
        ret =false; 
      }});
    
    if(ret){
        var time=getBusinessTimeObject();
        time.from=Moment.moment(available.from).format("HH:mm");
        time.to=Moment.moment(available.to).format("HH:mm");
        availabilityList.push(time);       
    }});
  
  if(availabilityList.length===0){
    return {
      "type": "text",
      "text": MSG_RESERVE_ABLE_NOTHING
    };    
  }
  
  var main=bodyForAvailable();
  availabilityList.forEach(function( item ) {
    var button=addButtonForAvailable();
    var separator=addSeparatorForAvailable();
    
    button.action.label = Utilities.formatString("%s～%s",item.from,item.to);
    var data={
      "message": MSG_CMD30_SELECTED_TIME,
      "from":item.from,
      "to":item.to
    };
    button.action.data = JSON.stringify(data);
    
    //mainへ追加
    main.contents.body.contents.push(button);
    main.contents.body.contents.push(separator);
  });
  
  return main;
}

function addButtonForAvailable() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "",
      "data": ""
    },
    "color": "#EEABE8",
    "style": "primary"
  };
}

function addSeparatorForAvailable() {
  return {
    "type": "separator"
  };
}

function bodyForAvailable() {
  return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "予約可能な時間帯",
          "align": "center"
        },
        {
          "type": "text",
          "text": "※時間帯を選択してください",
          "align": "center"
        },
        {
          "type": "separator"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": []
    }
  }
};
}


///////////////テストコード

//getAvailabilityListTest
function getAvailabilityListTest(){
  var ledger=getLedgerObject();

  ledger.customerId="test2"
  ledger.date=Moment.moment("2020/02/17 2:34:50").format("YYYY/MM/DD HH:mm:ss");
  ledger.reserveDate=Moment.moment("2020/02/24").format("YYYY/MM/DD");
  ledger.selectMenu="M2";
  ledger.selectCourse="P1-1";
  
  var result= getAvailabilityList(ledger);
  Logger.log(result);
}
