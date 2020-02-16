//カルテオブジェクト
function getCarteObject() {
 return {
   "type": "", //問合せ種別
   "date": "", //応対日時
   "customerId": "", //お客さまID
   "customerName": "", //お客さま名   
   "ledger": getLedgerObject(), //台帳オブジェクト   
   "resultLastConfirm": "", //最終確認結果
   "resultCalendar": "" //カレンダ反映結果
 };
}

//台帳オブジェクト
function getLedgerObject() {
 return {
   "ledgerNo": "", //台帳No   
   "customerId": "", //お客さまID
   "customerName": "", //お客さま名
   "date": "", //記録日時
   "reserveDate": "", //予約日付
   "reserveFromTime": "", //予約時間From
   "reserveToTime": "", //予約時間To
   "selectMenu": "", //選択メニュー
   "selectCourse": "", //選択コース
   "status": "", //ステータス
   "googleCalendarId": "" //GoogleカレンダID
 };
}

//カルテオブジェクト（初期値付き）
function getCarteObjectWithValue(type,date,customerId,customerName,selectMenu) {
  var carte=getCarteObject();
  carte.type=type;
  carte.date=date;
  carte.customerId=customerId;
  carte.customerName=customerName;
  if(selectMenu)
  {
    //台帳データ
    var ledgerData=carte.ledger;
    ledgerData.customerId=carte.customerId;
    ledgerData.customerName=carte.customerName;
    ledgerData.date=carte.date=date;
    ledgerData.selectMenu=selectMenu;    
  }
  return carte;
}

//1.No
//2.お客さまID
//3.姓
//4.名
//5.姓カナ
//6.名カナ
//7.電話番号
//8.メールアドレス
//9.生年月日
//10.認証済み

//顧客オブジェクト
function getCustomerObject() {
 return {
   "no": "", //No
   "customerId": "", //お客さまID
   "lastName": "", //姓
   "firstName": "", //名
   "lastNameKana": "", //姓カナ
   "firstNameKana": "", //名カナ
   "phone": "", //電話番号
   "mail": "", //メールアドレス
   "birth": "", //生年月日
   "authenticated": "" //認証済み
 };
}


