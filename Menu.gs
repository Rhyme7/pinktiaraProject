//該当メニューのコースデータを取得
function getMenu(menuCd) {
  
  var sheet = spreadsheet.getSheetByName('メニュー');
  
  //セルの内容を2次元配列に格納
  const values = sheet.getSheetValues(1, 1, sheet.getMaxRows(), 8);

  var list= new Array();
  values.forEach(function(row){
    if(row[0] === menuCd) {
      var course=course=getMenuObject();
    
      course.menuCd = row[0],
      course.menuName = row[1],
      course.courseName = row[2],
      course.description = row[3],
      course.amount = row[4],
      course.display = row[5]
      
      list.push(course);
    }
  });

  return list;
}



/////////テストコード
function getMenuTest(){
  var list=getMenu("M2");
  Logger.log(list);
}
