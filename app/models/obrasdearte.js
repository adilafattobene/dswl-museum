module.exports = {
  getAllObrasDeArte: function (connection, callback) {
    let sql = "select * from obrasdearte";
    connection.query(sql, callback);
  },

  getAllTarsila: function (connection, callback) {
    let sql = "select * from obrasdearte where artista = 'Tarsila do Amaral';";

    connection.query(sql, callback);
  },

  getAllPortinari: function (connection, callback) {
    let sql = "select * from obrasdearte where artista = 'Cândido Portinari';";

    connection.query(sql, callback);
  },
};
