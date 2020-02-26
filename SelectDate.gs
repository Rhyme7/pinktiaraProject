function getSelectDateDialog() {
  
  var main= {
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
            "text": "【Step1】空き状況を確認します♪",
            "align": "center"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWucctySFO_JuJJfsVg310FXAUsbDAfjU4PEWpc3QC5M-dUNmOA&s",
        "size": "full",
        "aspectRatio": "1.51:1",
        "aspectMode": "fit"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "下のボタンをクリックください❤",
            "align": "center",
            "weight": "bold"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "datetimepicker",
              "label": "日付選択",
              "data": "{\"message\":\"30_日付指定\"}",
              "mode": "date",
              "max": "",
              "min": ""
            },
            "height": "sm",
            "color": "#EEABE8",
            "style": "primary"
          }
        ]
      }
    }
  };
  
  
  //max取得
  //日付が15日未満は、当月末日
  //日付が15日以降は、翌月末日
  var now= Moment.moment();
  var day= Number(now.format("DD"));
  var base=now.format("YYYY/MM/01");
  var max;
  if(day <= 15){
    max= Moment.moment(base).add(1,"M").add(-1,"d").format("YYYY-MM-DD");
  }else{
    max= Moment.moment(base).add(2,"M").add(-1,"d").format("YYYY-MM-DD");
  }
  main.contents.footer.contents[0].action.max=max;
  
  //min取得：本日
  main.contents.footer.contents[0].action.min=now.format("YYYY-MM-DD");
  
  return main;
}


///////////////////////テストコード
function getSelectDateDialogTest(){
  var ret= getSelectDateDialog();
  Logger.log(ret);
}