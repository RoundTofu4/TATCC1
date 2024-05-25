const db = require('../config/db.config');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.execute(query, [userData.username, userData.password], callback);
  },
  findByUsername: (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.execute(query, [username], callback);
  }
};

module.exports = User;