const sql = require("./db.js");

// constructor
const Bread = function(bread) {
  this.name = bread.name;
};

Bread.getAll = result => {
  sql.query("SELECT * FROM breads", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("breads: ", res);
    result(null, res);
  });
};