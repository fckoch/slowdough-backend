const db = require("../models");
const { uuid } = require('uuidv4');
const Bread = db.breads;
const Op = db.Sequelize.Op;

// Retrieve all breads from the database.
exports.findAll = (req, res) => {
/* #swagger.tags = ['Breads']
   #swagger.description = 'Endpoint to list breads' */
/* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Bread',
    required: true,
      schema: { $ref: "#/definitions/AddBread" }
    } */
/* #swagger.responses[200] = {
    description: 'Breads successfully obtained.',
    schema: { $ref: '#/definitions/Bread' }
    } */
  Bread.findAll()
    .then(data => {
      res.status(200).send(data);
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

  // Save Bread in the database
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

// Update Bread
exports.update = (req, res) => {
  const uuid = req.params.uuid;
  Bread.update(req.body, {
    where: { uuid: uuid}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bread updated"
        });
      } else {
        res.send({
          message: "Cannot update Bread, not valid body"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bread"
      })
    });
};

// Delete Bread
exports.delete = (req, res) => {
  const uuid = req.params.uuid;
  Bread.destroy({
    where: { uuid: uuid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bread deleted"
        });
      } else {
        res.send({
          message: "Cannot delete Bread"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Bread"
      })
    });
};