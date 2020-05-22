const { connection } = require('../utils/db');

const getUsers = (req, res) => {
  if (req.user.isAdmin) {
    connection.query('SELECT id, name, email, isAdmin FROM user', [], (err, results, fields) => {
      if (err) res.status(500).send(err.code);
      if (results) res.json(results);
    });
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

module.exports = {
  getUsers
};
