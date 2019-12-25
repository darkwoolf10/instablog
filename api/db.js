let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'instablog'
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
