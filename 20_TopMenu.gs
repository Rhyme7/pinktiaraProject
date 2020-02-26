//トップメニュー
function getTopMenu(cId) {
 
  var menu = {
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "carousel",
      "contents": []
    }
  };


  if(cId==="U5b22be70377b7e9aca78f8a6ae04a6e5" || cId==="U66425016b131cd4d943d3699d53791fc"){
    menu.contents.contents.push(getMenuTop("M99","管理者メニュー",""));
  }

  menu.contents.contents.push(getMenuTop("M3","おすすめメニュー","https://drive.google.com/uc?export=view&id=1VVG2kpXAZuTpe_8Bv8UwXfH2-jnwrWG8"));
  menu.contents.contents.push(getMenuTop("M2","まつ毛パーマメニュー","https://drive.google.com/uc?export=view&id=11e3yF2IoD1oso3u0iG8oNJp0foXIzsb8"));
  menu.contents.contents.push(getMenuTop("M1","まつ毛エクステメニュー","https://www.dollylash.co.jp/wp/wp-content/themes/dollylash201711/img/ph_25.jpg"));
  
  return menu;
}



/////テストコード
function getTopMenuTest(){
  var ret= getTopMenu("U66425016b131cd4d943d3699d53791fc");
  Logger.log(ret);
}