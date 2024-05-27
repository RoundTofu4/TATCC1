const mysql = require('mysql2');

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const db = mysql.createConnection({
  host: "34.72.148.145",
  user: "root",
  password: "",
  database: "unix1"
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;
