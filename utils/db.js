const mysql = require('mysql');

module.exports = {
  connection: mysql.createConnection({
    host     : 'localhost',
    user     : 'tester',
    password : '1234',
    database : 'notes'
  })
}