module.exports = app => {
    const breads = require("../controllers/bread.controller.js");

    // Retrieve all Breads
    app.get("/breads", breads.findAll);
  };