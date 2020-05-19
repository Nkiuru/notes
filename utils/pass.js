'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('./db');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use('local', new Strategy(
  {usernameField: 'email'},
  (email, password, done) => {
    db.connection.query('SELECT id, name, email, isAdmin FROM user WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
      console.log(results);
      if (results.length > 0) {
        return done(null, Object.assign({},results[0]));
      } else {
        return done(null, false);
      }
    });
  }
));

passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
  },
  (jwtPayload, done) => {
    return done(null, jwtPayload || false);
  }
));

module.exports = passport;