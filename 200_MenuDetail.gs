//各詳細メニュー詳細
function getMenuDetail(menuCd,menuName,image) {
 //コースデータ取得
  var list = getCourseForMenu(menuCd);
  
  var main=bodyForCourse(image);
  var header=addHeader(menuName);
  main.contents.body.contents.push(header);
  
  var i=0;
  list.forEach(function( item ) {
    
    if(item.display === 1){
      i=i+1;
      var detail=addDetail();
      var detailContent1=addDetailContent1();
      var detailContent2=addDetailContent2();
      var detailContent3=addDetailContent3();
      
      //コース名
      detailContent1.text= Utilities.formatString("(%s) %s",i,item.courseName);
      //時間
      detailContent2.text=item.duration + "分";
      //料金
      detailContent3.text=item.amount + "円";
      
      detail.contents.push(detailContent1);
      detail.contents.push(detailContent2);    
      detail.contents.push(detailContent3);
      
      //説明
      var description=addDescription();
      description.text=item.description;
      
      //mainへ追加
      main.contents.body.contents.push(detail);
      main.contents.body.contents.push(description);
      
      var spacer=addSpacer();
      var button=addButtonContent();
      var data={
        "message": MSG_CMD30_CHECK_AVAILABILITY,
        "course":item.courseCd,
        "duration":item.duration
      };
      button.action.data = JSON.stringify(data);
      
      main.contents.body.contents.push(button);
      
      //パーマの場合のみ2名、3名予約ボタン表示
      if(item.menuCd == "M2"){
        var buttonOption1=addButtonContentOption1();
        var buttonOption2=addButtonContentOption2();
        var data1={
          "message": MSG_CMD30_CHECK_AVAILABILITY,
          "course":item.courseCd + "-1",
          "duration":60
        };
        var data2={
          "message": MSG_CMD30_CHECK_AVAILABILITY,
          "course":item.courseCd + "-2",
          "duration":70
        };
        buttonOption1.action.data = JSON.stringify(data1);
        buttonOption2.action.data = JSON.stringify(data2);
        
        main.contents.body.contents.push(buttonOption1);
        main.contents.body.contents.push(buttonOption2);
      }      
      main.contents.body.contents.push(spacer);   
    }      
  });

    
  return main;
}


function addHeader(menuName) {
  return {
    "type": "text",
    "text": menuName,
    "size": "md",
    "align": "center",
    "gravity": "center",
    "weight": "regular",
    "color": "#E809A3"
  };
}

function addDetail() {
  return {
    "type": "box",
    "layout": "baseline",
    "contents": []
  };
}

function addDetailContent1() {
  return {
    "type": "text",
    "text": "",
    "flex": 3,
    "align": "start",
    "weight": "bold",
    "color": "#010101"
  };
}

function addDetailContent2() {
  return {
    "type": "text",
    "text": "",
    "flex": 0,        
    "margin": "sm",
    "weight": "bold"
  };
}
function addDetailContent3() {
  return {
    "type": "text",
    "text": "",
    "flex": 0,    
    "size": "sm",
    "align": "end",
    "color": "#AAAAAA"
  };
}

function addDescription() {
  return {
    "type": "text",
    "text": "",
    "size": "xxs",
    "color": "#AAAAAA",
    "wrap": true
  };
}

function addButtonContent() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "予約する",
      "data": ""
    },
    "color": "#EEABE8",
    "style": "primary"
  };
}

function addButtonContentOption1() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "お友達2名で予約する",
      "data": ""
      },
    "color": "#EEABE8",
    "style": "secondary"
  };
}

function addButtonContentOption2() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "お友達3名で予約する",
      "data": ""
      },
    "color": "#EEABE8",
    "style": "secondary"
  };
}

function addSpacer() {
  return {
    "type": "separator"
  };
}

function bodyForCourse(image) {
 return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": image,
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": []
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "spacer",
          "size": "xxl"
        }
      ]
    }
  }
};
}


///////テストコード
function getMenuDetailTest(){
  //var ret = getMenuDetail("M1","まつ毛エクステメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_26.jpg");
  var ret = getMenuDetail("M2","まつ毛パーマメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg");
  Logger.log(JSON.stringify(ret));
}