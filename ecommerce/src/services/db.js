const fs = require('fs');

const dataFilePath = __dirname + '/data.json';

const db = {products: []};

fs.readFile(dataFilePath, 'utf8', function (err, data) {
  try {
    data = JSON.parse(data);
  } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
  }
  if (data && data.msgs) db.msgs = data.msgs;
});

setInterval(function () {
  fs.writeFile(dataFilePath, JSON.stringify(db), function (err) {
    if (err) throw err;
  });
}, 5000);

module.exports = db;
