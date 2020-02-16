//パーマメニュートップ
function getPermMenuTop() {
 return {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_26.jpg",
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
          "text": "まつげパーマメニュー",
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
              "text": "①新規学生",
              "flex": 2,
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
              "text": "1,650円～",
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
              "text": "②再来学生",
              "flex": 2,
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
              "text": "2,200円～",
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
              "text": "③新規一般",
              "flex": 2,
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
              "text": "3,740円～",
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
              "text": "④再来一般",
              "flex": 2,
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
              "text": "3,740円～",
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
            "data": "{\"message\":\"20_パーマメニュー詳細\",\"menu\":\"M2\"}"
          },
          "color": "#905C44",
          "style": "primary"
        }
      ]
    }
  };
}

//パーマメニュー詳細
function getPermMenuDetail() {
 return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_26.jpg",
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
          "text": "まつげパーマメニュー",
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
              "text": "①新規学生",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            }
          ]
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上",
              "flex": 1,
              "align": "center",
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
              "text": "1,650円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P1-1\",\"duration\":60}"
          }
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上下",
              "flex": 1,
              "align": "center",
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
              "text": "2,750円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P1-2\",\"duration\":60}"
          }
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "②再来学生",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            }
          ]
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上",
              "flex": 1,
              "align": "center",
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
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P2-1\",\"duration\":60}"
          }
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上下",
              "flex": 1,
              "align": "center",
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
              "text": "3,300円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P2-2\",\"duration\":60}"
          }
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "③新規一般",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            }
          ]
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上",
              "flex": 1,
              "align": "center",
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
              "text": "3,740円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P3-1\",\"duration\":60}"
          }
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上下",
              "flex": 1,
              "align": "center",
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
              "text": "5,060円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P3-2\",\"duration\":60}"
          }
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "④再来一般",
              "flex": 2,
              "align": "start",
              "weight": "bold",
              "color": "#010101"
            }
          ]
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上",
              "flex": 1,
              "align": "center",
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
              "text": "3,740円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P4-1\",\"duration\":60}"
          }
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "・上下",
              "flex": 1,
              "align": "center",
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
              "text": "5,060円",
              "flex": 0,
              "size": "sm",
              "align": "end",
              "color": "#AAAAAA"
            }
          ]
        },
        {
          "type": "button",
          "action": {
            "type": "postback",
            "label": "予約する",
            "data": "{\"message\":\"30_空き状況確認\",\"course\":\"P4-2\",\"duration\":60}"
          }
        },
        {
          "type": "separator"
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
        }
      ]
    }
  }
};
}