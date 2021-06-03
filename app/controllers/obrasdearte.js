const dbConnection = require("../../config/dbServer");
const { getAllObrasDeArte, getAllTarsila } = require("../models/obrasdearte");

module.exports.getAll = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  getAllObrasDeArte(connection, function (err, result) {
    res.render("home.ejs", { obrasdearte: result });
  });
};

module.exports.getTarsila = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  getAllTarsila(connection, function (err, result) {
    res.render("tarsila.ejs", { obrasdearte: result });
  });
};

module.exports.getPortinari = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from obrasdearte where artista = 'Cândido Portinari';";

  connection.query(sql, function (err, result) {
    res.render("portinari.ejs", { obrasdearte: result });
  });
};
