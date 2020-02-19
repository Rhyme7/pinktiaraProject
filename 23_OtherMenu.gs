//おすすめメニュートップ
function getOtherMenuTop() {
 return {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_9.jpg",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "text",
          "text": "おすすめメニュー",
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
              "text": "①パーマ＋白髪染め",
              "flex": 3,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            },
            {
              "type": "text",
              "text": "120分",
              "margin": "sm",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "3,960円",
              "flex": 0,
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
              "text": "②白髪染めのみ",
              "flex": 3,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            },
            {
              "type": "text",
              "text": "60分",
              "margin": "sm",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "2,200円",
              "flex": 0,
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
            "data": "{\"message\":\"20_おすすめメニュー詳細\",\"menu\":\"M3\"}"
          },
          "color": "#EEABE8",
          "style": "primary"
        }
      ]
    }
  };
}




///////テストコード
function getOtherMenuTopTest(){
  var ret = getOtherMenuTop();
  Logger.log(JSON.stringify(ret));
}