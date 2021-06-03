module.exports = {
  getAllFotos: function (connection, callback) {
    let sql = "select * from fotos;";

    connection.query(sql, callback);
  },
};
