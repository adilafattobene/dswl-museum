const dbConnection = require("../../config/dbServer");
const { getAllPhotos } = require("../controllers/fotos");
const {
  getAll,
  getTarsila,
  getPortinari,
  insertObraDeArte,
} = require("../controllers/obrasdearte");
const { check, validationResult } = require("express-validator");

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
      res.render("insertPage", { obra: "", errors: "" });
    });
  },

  obrasdearteSave: function (app) {
    app.post(
      "/obrasdearte/save",
      [
        check("name")
          .isLength({ min: 5 })
          .withMessage("Nome deve ter mais do que 5 caracteres"),
        check("artist")
          .isLength({ min: 5 })
          .withMessage("Artista deve ter mais do que 5 caracteres"),
        check("year")
          .isLength({ min: 4, max: 5 })
          .isNumeric()
          .withMessage(
            "Ano deve ser númerico e ter mais do que 4 e no máximo 5 caracteres"
          ),
        check("url").isURL().isLength({ min: 5 }).withMessage("URL invalida"),
      ],
      function (req, res) {
        insertObraDeArte(app, req, res, validationResult(req));
      }
    );
  },
};
