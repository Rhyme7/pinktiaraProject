var MSG_CMD10_REGIST_ACCOUNT="10_初回登録";

var MSG_CMD20_GET_MENU="20_メニュー";
var MSG_CMD20_EXT_MENU="20_エクステメニュー詳細";
var MSG_CMD20_PRM_MENU="20_パーマメニュー詳細";
var MSG_CMD20_OTR_MENU="20_おすすめメニュー詳細";

var MSG_CMD30_CHECK_AVAILABILITY="30_空き状況確認";
var MSG_CMD30_SELECTED_DATE="30_日付指定";
var MSG_CMD30_SELECTED_TIME="30_時刻指定";
var MSG_CMD30_CONFIRM_LAST="30_予約最終確認";

var MSG_CMD40_CONFIRM_RESERVED="40_予約確認";

var MSG_CMD50_CANCEL_RESERVED="50_予約キャンセル";
var MSG_CMD50_CANCEL_SELECTED="50_キャンセル選択";
var MSG_CMD50_CONFIRM_LAST="50_キャンセル最終確認";

var MSG_REPLY_HELP="ヘルプ";

//アプリメッセージ登録
var msgList = [
  //初回登録
  [MSG_CMD10_REGIST_ACCOUNT]
  
  //メニュー取得
  ,[MSG_CMD20_GET_MENU],[MSG_CMD20_EXT_MENU],[MSG_CMD20_PRM_MENU],[MSG_CMD20_OTR_MENU]
  
  //予約
  ,[MSG_CMD30_CHECK_AVAILABILITY],[MSG_CMD30_SELECTED_DATE],[MSG_CMD30_SELECTED_TIME],[MSG_CMD30_CONFIRM_LAST]
  
  //予約確認
  ,[MSG_CMD40_CONFIRM_RESERVED]
  
  //予約キャンセル
  ,[MSG_CMD50_CANCEL_RESERVED],[MSG_CMD50_CANCEL_SELECTED],[MSG_CMD50_CONFIRM_LAST]
  
  //その他(応答メッセージなど)
  ,[MSG_REPLY_HELP]
];

//不正なメッセージはエラー
function hasMessage(msg) {
 var hasId = msgList.some(function(array, i, msgList) {
    return (array[0] === msg);
  });

  return hasId;
  
}

//正常メッセージ
var MSG_REGIST_REQUEST="アプリを利用するにあたり、下記URLから初回登録が必要となります✨\n1分ほどで完了する内容となっていますのでご登録くださいませ❤\nhttps://script.google.com/macros/s/%s/exec?uid=%s";

var MSG_RESERVE_RESULT_NOTHING="%sさま❤\n\n現在ご予約は頂いておりません🐾\n\n";
var MSG_RESERVE_RESULT_HEADER="%sさま❤\n\n以下%s件のご予約を頂いております。\n\n";
var MSG_RESERVE_RESULT_DETAIL="▶%s件目\n【メニュー】%s\n【コース】%s\n【日時】%s %s ～ %s\n\n";
var MSG_RESERVE_RESULT_FOOTER="\n(注意事項)\n時間変更はできません。\n時間変更をご希望の場合は、お手数ですが一度キャンセル頂いた上で再度予約ください m(_ _)m\n\nキャンセルは下の「pink tiaraメニュー」をタップください♪\n\npink tiara❤\n\n";

var MSG_RESERVE_INFO="【メニュー】%s\n【コース】%s\n【日時】%s %s ～ %s\n\n";

var MSG_RESERVE_ABLE_NOTHING="大変申し訳ございません m(_ _)m\n\n選択した日付の予約は満席でございます。\n別の日付を選択ください。\n";

//エラーメッセージ
var MSG_ERROR_REGIST="初回登録に失敗しました。\nお手数ですが管理者までお問い合わせください。m(_ _)m\n ";