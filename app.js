const express = require('express');
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const passport = require('passport');
const cors = require('cors');
require('./utils/pass.js');
const app = express();

app.use(cors());
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/home', passport.authenticate('jwt', { session: false }), homeRoutes);



app.listen(8000, () => {
  db.connection.connect();
  console.log('listening on port', 8000);
});