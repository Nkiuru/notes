const { connection } = require('../utils/db');

const getMyNotes = (req, res) => {
  connection.query(`SELECT note.*, user.name AS author from note LEFT JOIN user ON note.userId = user.id WHERE note.userId = ${req.user.id}`, [], (err, results, fields) => {
    if (err) res.status(500).send(err.code);
    if (results) res.json(results);
  });
};

const getAllNotes = (req, res) => {
  if (req.user.isAdmin) {
    connection.query('SELECT note.*, user.name AS author from note LEFT JOIN user ON note.userId = user.id', [], (err, results, fields) => {
      if (err) res.status(500).send(err.code);
      if (results) res.json(results);
    });
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

const addNote = (req, res) => {
  const userId = req.user.id;
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).send({ message: 'Missing title/content' });
  } else {
    connection.query('INSERT INTO note(id, title, content, userId) VALUES (0, ?, ?, ?)', [title, content, userId], (err, results, fields) => {
      if (err) res.status(500).send(err.code);
      if (results) res.send({ id: results.insertId });
    });
  }
};

module.exports = {
  getMyNotes,
  getAllNotes,
  addNote,
};