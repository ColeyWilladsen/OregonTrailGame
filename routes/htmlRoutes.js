var db = require("./models");

module.exports = function(app) {
  // Load index page
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/add.html"));
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
