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
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });