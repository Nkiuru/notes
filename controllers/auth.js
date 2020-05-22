const jwt = require('jsonwebtoken');
const passport = require('passport');
const {connection} = require('../utils/db');

const login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Username / password incorrect',
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user, 'your_jwt_secret');
      return res.json({ user, token });
    });
  })(req, res);
};

const signup = (req,res) => {
  const {name, email, password, isAdmin} = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ message: 'Missing fields' });
  } else {
    connection.query('INSERT INTO user(id, name, email, password, isAdmin) VALUES (0, ?, ?, ?, ?)', [name, email, password, isAdmin], (err, results, fields) => {
      if (err) res.status(500).send(err.code);
      if (results) res.send({id: results.insertId });
    });
  }
};

module.exports = {
  login,
  signup,
};