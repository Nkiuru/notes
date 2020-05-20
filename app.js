const express = require('express');
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const passport = require('passport');
const cors = require('cors');
require('./utils/pass.js');
const app = express();

app.use(cors());
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/notes', passport.authenticate('jwt', { session: false }), noteRoutes);



app.listen(8000, () => {
  db.connection.connect();
  console.log('listening on port', 8000);
});