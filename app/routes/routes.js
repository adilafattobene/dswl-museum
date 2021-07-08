const dbConnection = require("../../config/dbServer");
const { getAllPhotos } = require("../controllers/fotos");
const {
  getAll,
  getTarsila,
  getPortinari,
  insertObraDeArte,
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

  obrasdeartePost: function (app) {
    app.get("/obrasdearte/insert", function (req, res) {
      res.render("insertPage");
    });
  },

  obrasdearteSave: function (app) {
    app.post("/obrasdearte/save", function (req, res) {
      insertObraDeArte(app, req, res);
    });
  },
};
