module.exports = app => {
    const breads = require("../controllers/bread.controller.js");

    var router = require("express").Router();

    // Retrieve all Breads
    router.get("/", breads.findAll);
    router.post("/", breads.create);
    router.put("/:uuid", breads.update);
    router.delete("/:uuid", breads.delete);
    app.use('/api/breads', router);
  };