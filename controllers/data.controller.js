const db = require('../config/db.config');

exports.getAllData = (req, res) => {
  const query = 'SELECT * FROM data';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

exports.createData = (req, res) => {
  const { name, value } = req.body;
  const query = 'INSERT INTO data (name, value) VALUES (?, ?)';
  db.execute(query, [name, value], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Data created!' });
  });
};

exports.updateData = (req, res) => {
  const { id } = req.params;
  const { name, value } = req.body;
  const query = 'UPDATE data SET name = ?, value = ? WHERE id = ?';
  db.execute(query, [name, value, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Data updated!' });
  });
};

exports.deleteData = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM data WHERE id = ?';
  db.execute(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Data deleted!' });
  });
};