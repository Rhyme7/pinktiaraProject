//予約一覧（キャンセル対象リスト）
function getCancelList(customerId,customerName) {

  var result=getReservedList(customerId);
  result.sort(function(a,b){return(new Date(a.reserveDate+" "+a.reserveFromTime) - new Date(b.reserveDate+" "+b.reserveFromTime));});
  
  if(result.length===0){
    return {
      "type": "text",
      "text": Utilities.formatString(MSG_RESERVE_RESULT_NOTHING,customerName)
    };    
  }
  
  var main=body();
  result.forEach(function( item ) {
    var button=addButton();
    var separator=addSeparator();
    
    button.action.label = Utilities.formatString("%s %s～%s",item.reserveDate,item.reserveFromTime,item.reserveToTime);
    var data={
      "message": MSG_CMD50_CANCEL_SELECTED,
      "ledgerNo":item.ledgerNo
    };
    button.action.data = JSON.stringify(data);
    
    //mainへ追加
    main.contents.body.contents.push(button);
    main.contents.body.contents.push(separator);
  });
  
return main;  
}

function addButton() {
  return {
    "type": "button",
    "action": {
      "type": "postback",
      "label": "",
      "data": ""
    },
    "margin": "none",
    "style": "primary"
  };
}

function addSeparator() {
  return {
    "type": "separator"
  };
}

function body() {
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
          "text": "予約一覧",
          "align": "center"
        },
        {
          "type": "text",
          "text": "※キャンセルする予約を選択ください",
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

//function getCancelListTest
function getCancelListTest(){
  var json = getCancelList("U5b22be70377b7e9aca78f8a6ae04a6e5");
  Logger.log(JSON.stringify(json));
}
