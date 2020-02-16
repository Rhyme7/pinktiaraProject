//トップメニュー
function getTopMenu() {
 
 return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      //エクステメニュー
      getExteMenuTop(),
      //パーマメニュー
      getPermMenuTop(),
      //おすすめメニュー
      getOtherMenuTop()
    ]
  }
};

}
