let mysql = require('mysql2');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123#@!1337x',
    database : 'sakila',
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
