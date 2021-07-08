let express = require("express");

let app = express();

let port = 3000;

app.listen(port, function () {
  console.log("Server runing || port ", port);
});

app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
