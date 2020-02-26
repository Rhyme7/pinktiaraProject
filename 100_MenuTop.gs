//トップメニュー取得
function getMenuTop(menuCd,menuName,image) {
 //メニューデータ取得
  var list = getMenu(menuCd);
  
  var main=bodyForMenu(image);
  var header=addHeaderForMenu(menuName);
  main.body.contents.push(header);
  
  var i=0;
  list.forEach(function( item ) {
    
    if(item.display === 1){
      i=i+1;
      var detail=addDetail();
      var detailContent1=addDetailContent1ForMenu();
      var detailContent2=addDetailContent2ForMenu();
      
      //コース名
      detailContent1.text= Utilities.formatString("(%s) %s",i,item.courseName);
      //料金
      detailContent2.text=item.amount;
      
      detail.contents.push(detailContent1);
      detail.contents.push(detailContent2);    
      
      //説明
      var description=addDescriptionForMenu();
      description.text=item.description;
      
      //mainへ追加
      main.body.contents.push(detail);
      main.body.contents.push(description);
    }
  });

  var spacer=addSpacerForMenu();
  var button=addButtonContentForMenu();
  var m;
  if(menuCd === "M1"){
    m=MSG_CMD20_EXT_MENU;
  }else if(menuCd === "M2"){
    m=MSG_CMD20_PRM_MENU;
  }else if(menuCd === "M3"){
    m=MSG_CMD20_OTR_MENU;
  }else if(menuCd === "M99"){
    m=MSG_CMD20_MNG_MENU;
  }
  
  var data={
    "message": m,
    "menu":menuCd,
  };
  button.action.data = JSON.stringify(data);
  if (i>0){
    main.footer.contents.push(spacer);
    main.footer.contents.push(button); 
  }
  
  return main;
}


function addHeaderForMenu(menuName) {
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

function addDetailForMenu() {
  return {
          "type": "box",
          "layout": "baseline",
          "contents": []
        };
}

function addDetailContent1ForMenu() {
  return {
    "type": "text",
    "text": "",
    "flex": 3,
    "align": "start",
    "weight": "bold",
    "color": "#010101"
  };
}

function addDetailContent2ForMenu() {
  return {
    "type": "text",
    "text": "",
    "flex": 0,
    "margin": "sm",
    "weight": "bold"
  };
}

function addDescriptionForMenu() {
  return {
    "type": "text",
    "text": "",
    "size": "xxs",
    "color": "#AAAAAA",
    "wrap": true
  };
}

function addButtonContentForMenu() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "予約へ進む",
      "data": "{\"message\":\"20_エクステメニュー詳細\",\"menu\":\"M1\"}"
    },
    "color": "#EEABE8",
    "style": "primary"
  };
}


function addSpacerForMenu() {
  return {
    "type": "spacer",
    "size": "xxl"
  };
}

function bodyForMenu(image) {
 return {
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
      "contents": []
    }
  };
}


///////テストコード
function getMenuTopTest(){
  //var ret = getMenuTop("M1","まつ毛エクステメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_26.jpg");
  var ret = getMenuTop("M2","まつ毛パーマメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg");
  Logger.log(JSON.stringify(ret));
}