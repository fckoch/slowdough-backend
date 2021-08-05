const Bread = require("../models/bread.model.js");

// Retrieve all Breads from the database.
exports.findAll = (req, res) => {
    Bread.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving breads."
          });
        else res.send(data);
      });
};