const mysql = require('mysql');

// Create a connection to the MySQL database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', // XAMPP's default MySQL username
  password: '', // XAMPP's default MySQL password is empty
  database: 'mydb2', // Replace with your database name
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });