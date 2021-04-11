
//スプレッドシート


// logは毎日実行。バックアップは取らない
function LogClear(){
    var sheet = spreadsheet.getSheetByName('log');
    sheet.clear();
}

// カルテは毎月1回。バックアップをとる
function CarteBackup()){
    sheetCopyAnotherFile('カルテ');

    //let sheet = spreadsheet.getSheetByName('カルテ');
    //sheet.clear();
}

// 管理台帳は毎年1回。バックアップをとる
function CarteBackup()){
    sheetCopyAnotherFile('管理台帳');
    sheetCopyAnotherFile('売上管理');

    // var sheet = spreadsheet.getSheetByName('管理台帳');
    // sheet.clear();
}

// backupシートへコピー
function sheetCopyAnotherFile(sheetName) {
    //スクリプトに紐付いたアクティブなシートをコピー対象のシートとして読み込む
    let copySheet = spreadsheet.getSheetByName(sheetName);
    //シートのコピー先のスプレッドシートを読み込む
    let backupsheet = SpreadsheetApp.openById(getPropertyValue('BACKUPSHEET'));
    //コピー対象シートを同一のスプレッドシートにコピー
    let newCopySheet = copySheet.copyTo(backupsheet);

    let ymd = Moment.moment().format('YYYYMMDD');
    //コピーしたシート名を変更する
    newCopySheet.setName(sheetName + 'bk' + ymd);
}