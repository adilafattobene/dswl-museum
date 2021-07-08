const dbConnection = require("../../config/dbServer");
const {
  getAllObrasDeArte,
  getAllTarsila,
  getAllPortinari,
  insertObraDeArte,
} = require("../models/obrasdearte");

const logger = require("../../config/logger");

module.exports.getAll = function (app, req, res) {
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

  getAllObrasDeArte(connection, function (err, result) {
    logger.log({ level: "info", message: "Página obra de arte acessada." });
    res.render("home.ejs", { obrasdearte: result });
  });
};

module.exports.getTarsila = function (app, req, res) {
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

  getAllTarsila(connection, function (err, result) {
    logger.log({ level: "info", message: "Página Tarsila acessada." });
    res.render("tarsila.ejs", { obrasdearte: result });
  });
};

module.exports.getPortinari = function (app, req, res) {
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

  getAllPortinari(connection, function (err, result) {
    logger.log({ level: "info", message: "Página Portinari acessada." });
    res.render("portinari.ejs", { obrasdearte: result });
  });
};

module.exports.insertObraDeArte = function (app, req, res, errors) {
  if (errors) {
    console.log(errors);
  }

  let obra = req.body;
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

  insertObraDeArte(obra, connection, function (err, result) {
    if (err) logger.log({ level: "error", message: "Erro ao cadastrar obra" });
    logger.log({ level: "info", message: "Página de inserir acessada." });

    res.redirect("/obrasdearte");
  });
};
