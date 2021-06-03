const dbConnection = require("../../config/dbServer");
const { getAll, getTarsila } = require("../controllers/obrasdearte");

module.exports = {
  home: function (app) {
    app.get("/", function (req, res) {
      let connection = dbConnection();

      connection.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
      });

      let sql = "select * from fotos;";

      connection.query(sql, function (err, result) {
        res.render("fotos.ejs", { fotos: result });
      });
    });
  },

  tarsila: function (app) {
    app.get("/tarsila", function (req, res) {
      getTarsila(app, req, res);
    });
  },

  portinari: function (app) {
    app.get("/portinari", function (req, res) {
      let connection = dbConnection();

      connection.connect(function (err) {
        if (err) throw err;
        console.log("Conectado");
      });

      let sql =
        "select * from obrasdearte where artista = 'Cândido Portinari';";

      connection.query(sql, function (err, result) {
        res.render("portinari.ejs", { obrasdearte: result });
      });
    });
  },

  obrasdearte: function (app) {
    app.get("/obrasdearte", function (req, res) {
      getAll(app, req, res);
    });
  },
};
