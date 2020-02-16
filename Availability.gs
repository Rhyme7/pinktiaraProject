//空き状況リスト
function getAvailabilityList() {
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
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "10:00～11:00",
            "data": "{\"message\":\"30_時刻指定\",\"from\":\"10:00\",\"to\":\"11:00\"}"
          },
          "style": "primary"
        },
        {
          "type": "separator"
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "11:00～12:00",
            "data": "{\"message\":\"30_時刻指定\",\"from\":\"11:00\",\"to\":\"12:00\"}"
          },
          "style": "primary"
        },
        {
          "type": "separator"
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "12:00～13:00",
            "data": "{\"message\":\"30_時刻指定\",\"from\":\"12:00\",\"to\":\"13:00\"}"
          },
          "style": "primary"
        }
      ]
    }
  }
};
}
