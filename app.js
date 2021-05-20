const app = require("./config/server");
const dbConnection = require("./config/dbServer");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/tarsila", function (req, res) {
  res.render("tarsila.ejs");
});

app.get("/portinari", function (req, res) {
  res.render("portinari.ejs");
});

app.get("/obrasdearte", function (req, res) {
  let connection = dbConnection();
  let mysql = require("mysql");

  // let connection = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'ifsp',
  //   password: 'ifsp',
  //   database: 'museum'
  // });

  // connection.query(sql, function (error, result) {
  //   console.log(result);
  //   console.log(error);
  // });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });
  let sql = "select * from obrasdearte";
  connection.query(sql, function (err, result) {
    res.send(result);
  });
});
