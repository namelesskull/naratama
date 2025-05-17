const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1Pq68RxjLEF5Dzy_IduS3PG7gOB3YcjTmFFy1GOmZeLY/edit?usp=sharing'
);
const sheet = sheets.getSheetByName('New Booking');

function doPost(e) {
  var payload = JSON.parse(e.postData.contents);

  sheet.appendRow([
    payload.name,
    payload.univ,
    payload.rating,
    payload.review,
    payload.mua,
    payload.kebaya,
  ]);

  return ContentService.createTextOutput(
    'Data berhasil ditambahkan ke Spreadsheet!'
  );
}
