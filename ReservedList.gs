//予約一覧結果
function getReservedResult(customerId,customerName) {

  var result=getReservedList(customerId);
  result.sort(function(a,b){return(new Date(a.reserveDate+" "+a.reserveFromTime) - new Date(b.reserveDate+" "+b.reserveFromTime));});
  
  if(result.length===0){
    return {
      "type": "text",
      "text": Utilities.formatString(MSG_RESERVE_RESULT_NOTHING,customerName)
    };    
  }
  
  var resultMessage=MSG_RESERVE_RESULT_HEADER;
  
  var i=0;
  var detail="";
  result.forEach(function( item ) {
    i=i+1;
    detail=detail+Utilities.formatString(MSG_RESERVE_RESULT_DETAIL,i,item.selectMenu,item.selectCourse,item.reserveDate,item.reserveFromTime,item.reserveToTime);
  });
  
  resultMessage=Utilities.formatString(resultMessage+detail+MSG_RESERVE_RESULT_FOOTER,customerName,i);
  
  return {
    "type": "text",
    "text": resultMessage
  };
}

//予約一覧取得
function getReservedList(customerId) {
  
  //予約台帳から当該ユーザの一覧取得して、以下条件で絞り込む
  var list = readLedger(customerId);
  
  var reservedList = new Array();
  //キャンセル以外
  //過去予約は除く
  list.forEach(function( item ) {
    if(item.status !== "キャンセル" && 
       Moment.moment(item.reserveDate+" "+item.reserveFromTime).isAfter(YMDHMS())){
      
      reservedList.push(item);
    }
  });
  
  return reservedList;
}

//getReservedListTest
function getReservedListTest(){
  var list=getReservedList("U5b22be70377b7e9aca78f8a6ae04a6e5");
  Logger.log(JSON.stringify(list));
}


//getReservedResultTest
function getReservedResultTest(){
  var result = getReservedResult("U5b22be70377b7e9aca78f8a6ae04a6e5","大脇剣吾");
  Logger.log(JSON.stringify(result));
}