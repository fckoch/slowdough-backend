module.exports = app => {
    const breads = require("../controllers/bread.controller.js");

    var router = require("express").Router();

    // Retrieve all Breads
    router.get("/", breads.findAll);
    router.post("/", breads.create);

    app.use('/api/breads', router);
  };