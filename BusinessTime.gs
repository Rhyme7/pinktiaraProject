//該当曜日の営業時間を取得
function getBusinessTime(ymd) {
  
  var week = getWeek(ymd);
  var sheet = spreadsheet.getSheetByName('営業時間');
  var businessTime=getBusinessTimeObject();

  //セルの内容を2次元配列に格納
  const values = sheet.getSheetValues(1, 1, sheet.getMaxRows(), 3);

  //一行ずつマッチするキーワードを確認する（最初にヒットした値を格納）
  values.forEach(function(row){
    if(row[0] === week) {
      businessTime.from = Moment.moment(row[1]).format("HH:mm"),
      businessTime.to = Moment.moment(row[2]).format("HH:mm")
  }});

  //見つからなかった場合のメッセージ
  return businessTime;
}


/////////テストコード

function getBusinessTimeTest(){
  var time=getBusinessTime("2020/02/24");
  Logger.log(time);
}