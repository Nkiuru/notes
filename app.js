const express = require('express');
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const passport = require('passport');
require('./utils/pass.js');
const app = express();

app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', authRoutes);
app.use('/home', passport.authenticate('jwt', { session: false }), homeRoutes);



app.listen(3000, function () {
  db.connection.connect();
  console.log('listening on port', 3000);
});