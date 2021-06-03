const dbConnection = require("../../config/dbServer");

module.exports.getAllPhotos = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
  });

  let sql = "select * from fotos;";

  connection.query(sql, function (err, result) {
    res.render("fotos.ejs", { fotos: result });
  });
};