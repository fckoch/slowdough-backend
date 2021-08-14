module.exports = (sequelize, Sequelize) => {
  const Bread = sequelize.define("bread", {
    uuid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Bread;
};
