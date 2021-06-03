const dbConnection = require("../../config/dbServer");
const { getAllPhotos } = require("../controllers/fotos");
const {
  getAll,
  getTarsila,
  getPortinari,
} = require("../controllers/obrasdearte");

module.exports = {
  home: function (app) {
    app.get("/", function (req, res) {
      getAllPhotos(app, req, res);
    });
  },

  tarsila: function (app) {
    app.get("/tarsila", function (req, res) {
      getTarsila(app, req, res);
    });
  },

  portinari: function (app) {
    app.get("/portinari", function (req, res) {
      getPortinari(app, req, res);
    });
  },

  obrasdearte: function (app) {
    app.get("/obrasdearte", function (req, res) {
      getAll(app, req, res);
    });
  },
};
