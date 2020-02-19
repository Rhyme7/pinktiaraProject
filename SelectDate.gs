function getSelectDateDialog() {
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
          "text": "空き状況を確認します",
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
          "text": "日付を選択してください",
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
            "max": "2030-01-01",
            "min": "2020-01-01"
          },
          "height": "sm",
          "color": "#EEABE8",
          "style": "primary"
        }
      ]
    }
  }
};
}
