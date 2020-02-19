function getExteMenuTop(){
  return {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "label": "Action",
        "uri": "https://linecorp.com"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "まつげエクステメニュー",
          "size": "md",
          "align": "center",
          "gravity": "center",
          "weight": "regular",
          "color": "#E809A3"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "①エクステのみ",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            },
            {
              "type": "text",
              "text": "70分",
              "margin": "sm",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "4,400円",
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "text",
          "text": "ここに説明書きを補足する･･･",
          "size": "xxs",
          "color": "#AAAAAA",
          "wrap": true
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "②オフ込み",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            },
            {
              "type": "text",
              "text": "90分",
              "margin": "sm",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "5,500円",
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "text",
          "text": "ここに説明書きを補足する･･･",
          "size": "xxs",
          "color": "#AAAAAA",
          "wrap": true
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "spacer",
          "size": "xxl"
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約へ進む",
            "data": "{\"message\":\"20_エクステメニュー詳細\",\"menu\":\"M1\"}"
          },
          "color": "#EEABE8",
          "style": "primary"
        }
      ]
    }
  };
}

//
//
/////////テストコード
//function getExteMenuTopTest(){
//  var ret = getExteMenuTop("M1","まつ毛エクステメニュー");
//  Logger.log(JSON.stringify(ret));
//}