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
      course.discription = row[3],
      course.amount = row[4],
      course.duration = row[5]
    }
  });

  return course;
}


/////////テストコード

function getCourseTest(){
  var course=getCourse("X2");
  Logger.log(course);
}