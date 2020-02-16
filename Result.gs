//予約結果表示
function getResultReserved(carte) {
  var ledger=carte.ledger;
  
  return {
  "type": "text",
  "text": carte.customerName + "さま\nご予約ありがとうございます。\n\n" +
    ledger.reserveDate + " " + ledger.reserveFromTime + "～" + ledger.reserveToTime +
    "\nで予約を受付ました。\n\n当日のご来店心よりお待ちしております。\npink tiara\n\n"
  };
}



//キャンセル結果表示
function getResultCanceled(carte) {
  var ledger=carte.ledger;
  
  return {
  "type": "text",
  "text": carte.customerName + "さま\n\n" +
    ledger.reserveDate + " " + ledger.reserveFromTime + "～" + ledger.reserveToTime +
    "\nについてキャンセルを承りました。\n\nまたのご来店心よりお待ちしております。\npink tiara\n\n"
  };
}
