module.exports = app => {
    const breads = require("../controllers/bread.controller.js");
    const swaggerUi = require('swagger-ui-express');
    const swaggerFile = require('./../../swagger-output.json');

    var router = require("express").Router();

    // Retrieve all Breads
    router.get("/breads", breads.findAll);
    router.post("/breads", breads.create);
    router.put("/breads/:uuid", breads.update);
    router.delete("/breads/:uuid", breads.delete);
    app.use('', router);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

  };