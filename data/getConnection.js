const mysql = require("mysql2");
const { host, user, password, database } = require("../config/config.json").db;

const connection = mysql.createPool({
  host,
  user,
  password,
  database
});

module.exports = connection;
