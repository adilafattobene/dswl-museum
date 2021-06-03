const dbConnection = require("../../config/dbServer");

module.exports.getAll = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from obrasdearte";

  connection.query(sql, function (err, result) {
    res.render("home.ejs", { obrasdearte: result });
  });
};

module.exports.getTarsila = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from obrasdearte where artista = 'Tarsila do Amaral';";

  connection.query(sql, function (err, result) {
    res.render("tarsila.ejs", { obrasdearte: result });
  });
};
