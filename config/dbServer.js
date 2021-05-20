let mysql = require("mysql");

module.exports = function () {
  return (connection = mysql.createConnection({
    host: "localhost",
    user: "ifsp",
    password: "ifsp",
    database: "museum",
  }));
};
