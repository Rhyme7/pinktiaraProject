//予約最終確認
function getConfirmReserved(ledger) {
 
  return {
  "type": "template",
  "altText": "this is a confirm template",
  "template": {
    "type": "confirm",
    "actions": [
      {
        "type": "postback",
        "label": "はい",
        "data": Utilities.formatString("{\"message\":\"%s\",\"yn\":\"y\",\"date\":\"%s\",\"from\":\"%s\",\"to\":\"%s\"}",MSG_CMD30_CONFIRM_LAST,ledger.reserveDate,ledger.reserveFromTime,ledger.reserveToTime)
      },
      {
        "type": "postback",
        "label": "いいえ",
        "data": Utilities.formatString("{\"message\":\"%s\",\"yn\":\"n\",\"date\":\"%s\",\"from\":\"%s\",\"to\":\"%s\"}",MSG_CMD30_CONFIRM_LAST,ledger.reserveDate,ledger.reserveFromTime,ledger.reserveToTime)
      }
    ],
    "text": Utilities.formatString("[最終確認]\n\n【日時】\n%s %s～%s\n\n予約確定しますがよろしいですか？",ledger.reserveDate,ledger.reserveFromTime,ledger.reserveToTime)
  }
};
}



//キャンセル最終確認
function getConfirmCancel(ledger) {
  
  return {
  "type": "template",
  "altText": "this is a confirm template",
  "template": {
    "type": "confirm",
    "actions": [
      {
        "type": "postback",
        "label": "はい",
        "data": Utilities.formatString("{\"message\":\"%s\",\"yn\":\"y\",\"ledgerNo\":%s}",MSG_CMD50_CONFIRM_LAST, ledger.ledgerNo)
      },
      {
        "type": "postback",
        "label": "いいえ",
        "data": Utilities.formatString("{\"message\":\"%s\",\"yn\":\"n\",\"ledgerNo\":%s}",MSG_CMD50_CONFIRM_LAST, ledger.ledgerNo)
      }
    ],
    "text": Utilities.formatString("[最終確認]\n\n【日時】\n%s %s～%s\n\n予約をキャンセルしますか？",ledger.reserveDate,ledger.reserveFromTime,ledger.reserveToTime)
  }
};
}
