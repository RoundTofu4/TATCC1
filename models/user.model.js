const db = require('../config/db.config');

const User = {
  create: (userData, callback) => {
    db.query = ("INSERT INTO users (username, password) VALUES (?, ?)",
      [userData.username, userData.password],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          callback(err, null);
        }
      }
    );
    // db.execute(query, [userData.username, userData.password], callback);
  },
  
  findByUsername: (username, callback) => {
    db.query = ("SELECT * FROM users WHERE username = ?",
      username, 
      function (err, res) {
        if (err) {
          console.log("error: , err");
          callback(err, null);
        }
      }
    )
    // db.execute(query, [username], callback);
  }
};

module.exports = User;