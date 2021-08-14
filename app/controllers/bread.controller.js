const db = require("../models");
const { uuid } = require('uuidv4');
const Bread = db.breads;
const Op = db.Sequelize.Op;

// Retrieve all breads from the database.
exports.findAll = (req, res) => {
  Bread.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Create and Save a new Bread
exports.create = (req, res) => {
  console.log("bread request", req);
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const bread = {
    uuid: uuid(),
    name: req.body.name,
    description: req.body.description,
    type: req.body.type
  };

  // Save Tutorial in the database
  Bread.create(bread)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding a new Bread."
      });
    });
};