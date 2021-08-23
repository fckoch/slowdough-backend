const db = require("../models");
const { success, error } = require("../models/response");
const { uuid } = require('uuidv4');
const Bread = db.breads;

exports.findAll = (req, res) => {
  /*
   #swagger.tags = ['Breads']
   #swagger.responses[200] = {
    description: 'Success',
    schema: { $ref: '#/definitions/BreadsResponse' }
    }
  */
  Bread.findAll()
    .then(data => {
      res
        .status(200)
        .send(success(data, res.statusCode));
    })
    .catch(err => {
      res
        .status(500)
        .send(error("Some error occurred while retrieving breads.", res.statusCode));
    });
};

exports.create = (req, res) => {
  /*
   #swagger.tags = ['Breads']
   #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Bread',
    required: true,
      schema: { $ref: "#/definitions/AddBread" }
    }
   #swagger.responses[200] = {
    description: 'Success',
    schema: { $ref: '#/definitions/AddBreadResponse' }
    }
  */
  if (!req.body.name) {
    res
      .status(400)
      .send(error("Content can not be empty!", res.statusCode));
    return
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
      res
        .status(200)
        .send(success(data, res.statusCode));
    })
    .catch(err => {
      res
        .status(500)
        .send(error("Some error occurred while adding a new Bread.", res.statusCode));
    });
};

// Update Bread
exports.update = (req, res) => {
  /*
   #swagger.tags = ['Breads']
   #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Bread',
    required: true,
      schema: { $ref: "#/definitions/AddBread" }
    }
   #swagger.responses[200] = {
    description: 'Success',
    schema: { $ref: '#/definitions/AddBreadResponse' }
    }
  */
  const uuid = req.params.uuid;
  Bread.update(req.body, {
    where: { uuid: uuid}
  })
    .then(num => {
      if (num == 1) {
        Bread.findByPk(uuid)
          .then(data => {
            res
              .status(200)
              .send(success(data, res.statusCode));
          })
      } else {
        res
          .status(400)
          .send(error("Cannot update Bread, not valid body", res.statusCode));
      }
    })
    .catch(err => {
      res
        .status(500)
        .send(error("Error updating Bread", res.statusCode))
    });
};

// Delete Bread
exports.delete = (req, res) => {
  /*
   #swagger.tags = ['Breads']
   #swagger.responses[200] = {
    description: 'Success',
    }
   #swagger.responses[200] = {
    description: 'Success',
    schema: { $ref: '#/definitions/Response' }
    }
  */
  const uuid = req.params.uuid;
  Bread.destroy({
    where: { uuid: uuid }
  })
    .then(num => {
      if (num == 1) {
        res
          .status(200)
          .send(success());
      } else {
        res
          .status(400)
          .send(error("Cannot delete Bread", res.statusCode));
      }
    })
    .catch(err => {
      res
        .status(500)
        .send(error("Error deleting Bread", res.statusCode))
    });
};