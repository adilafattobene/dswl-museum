const dbConnection = require("../../config/dbServer");
const { getAllFotos } = require("../models/fotos");

module.exports.getAllPhotos = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  getAllFotos(connection, function (err, result) {
    res.render("fotos.ejs", { fotos: result });
  });
};
