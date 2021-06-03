let express = require("express");

let app = express();

let port = 3000;

app.listen(port, function () {
  console.log("Server runing || port ", port);
});

app.set("views", "./app/views");
app.use(express.static("public"));

module.exports = app;
