//該当メニューのコースデータを取得
function getCourseForMenu(menuCd) {
  
  var sheet = spreadsheet.getSheetByName('コース');
  
  //セルの内容を2次元配列に格納
  const values = sheet.getSheetValues(1, 1, sheet.getMaxRows(), 8);

  var list= new Array();
  values.forEach(function(row){
    if(row[0] === menuCd) {
      var course=course=getCourseObject();
    
      course.menuCd = row[0],
      course.courseCd = row[1],
      course.courseName = row[2],
      course.description = row[3],
      course.amount = row[4],
      course.duration = row[5],
      course.display = row[6]
      
      list.push(course);
    }
  });

  return list;
}

//コースデータを取得
function getCourse(courseCd) {
  
  var sheet = spreadsheet.getSheetByName('コース');
  
  //セルの内容を2次元配列に格納
  const values = sheet.getSheetValues(1, 1, sheet.getMaxRows(), 8);

  var course;
  //一行ずつマッチするキーワードを確認する（最初にヒットした値を格納）
  values.forEach(function(row){
    if(row[1] === courseCd) {
      course=getCourseObject();
    
      course.menuCd = row[0],
      course.courseCd = row[1],
      course.courseName = row[2],
      course.description = row[3],
      course.amount = row[4],
      course.duration = row[5],
      course.display = row[6]
    }
  });

  return course;
}


/////////テストコード
function getCourseForMenuTest(){
  var list=getCourseForMenu("M1");
  Logger.log(list);
}

function getCourseTest(){
  var course=getCourse("X2");
  Logger.log(course);
}