const app = require("./config/server");
const dbConnection = require("./config/dbServer");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/tarsila", function (req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from obrasdearte where artista = 'Tarsila do Amaral';";

  connection.query(sql, function (err, result) {
    res.render("tarsila.ejs", { obrasdearte: result });
  });
});

app.get("/portinari", function (req, res) {
  res.render("portinari.ejs");
});

app.get("/obrasdearte", function (req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from obrasdearte";

  connection.query(sql, function (err, result) {
    res.render("home.ejs", { obrasdearte: result });
  });
});
