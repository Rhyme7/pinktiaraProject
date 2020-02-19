//トップメニュー
function getTopMenu() {
 
 return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      //おすすめメニュー
      getOtherMenuTop(),
      //パーマメニュー
      getPermMenuTop(),
      //エクステメニュー
      getExteMenuTop()
    ]
  }
};

}



/////テストコード
function getTopMenuTest(){
  var ret= getTopMenu();
  Logger.log(ret);
}