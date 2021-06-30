const dbConnection = require("../../config/dbServer");
const { getAllFotos } = require("../models/fotos");

module.exports.getAllPhotos = function (app, req, res) {
  let connection = dbConnection();

  connection.connect(function (err) {
    if (err) {
      logger.log({ level: "error", message: err.message });

      let error =
        "<h1> Ocorreu algum erro com o servidor: </h1><h2>" + err.code + "<h2>";
      res.status(500).send(error);
    }

    console.log("Conectado");
  });

  getAllFotos(connection, function (err, result) {
    logger.log({ level: "info", message: "Página fotos acessada." });
    res.render("fotos.ejs", { fotos: result });
  });
};
