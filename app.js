const app = require('./config/server')

app.get("/", function (req, res) {
  res.render('home.ejs');
});

app.get("/tarsila", function (req, res) {
  res.render('tarsila.ejs');
});