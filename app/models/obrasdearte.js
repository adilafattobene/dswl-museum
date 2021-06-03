module.exports = {
  getAllObrasDeArte: function (connection, callback) {
    let sql = "select * from obrasdearte";
    connection.query(sql, callback);
  },
};
