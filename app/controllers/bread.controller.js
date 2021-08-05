const Bread = require("../models/bread.model.js");

// Create and Save a new Bread
exports.create = (req, res) => {

};

// Retrieve all Breads from the database.
exports.findAll = (req, res) => {
    Bread.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};

// Find a single Bread with a BreadId
exports.findOne = (req, res) => {

};

// Update a Bread identified by the BreadId in the request
exports.update = (req, res) => {

};

// Delete a Bread with the specified BreadId in the request
exports.delete = (req, res) => {

};

// Delete all Breads from the database.
exports.deleteAll = (req, res) => {

};