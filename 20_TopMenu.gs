//トップメニュー
function getTopMenu() {
 
 return {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      //おすすめメニュー
      getMenuTop("M3","おすすめメニュー","https://drive.google.com/uc?export=view&id=1VVG2kpXAZuTpe_8Bv8UwXfH2-jnwrWG8"),
      //パーマメニュー
      getMenuTop("M2","まつ毛パーマメニュー","https://drive.google.com/uc?export=view&id=11e3yF2IoD1oso3u0iG8oNJp0foXIzsb8"),
      //エクステメニュー
      getMenuTop("M1","まつ毛エクステメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg")     
    ]
  }
};

}



/////テストコード
function getTopMenuTest(){
  var ret= getTopMenu();
  Logger.log(ret);
}