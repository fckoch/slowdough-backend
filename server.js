const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://slowdough-api.herokuapp.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sequelize db
const db = require("./app/models");
// db.sequelize.sync();

// for dropping db and  resync
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to slow dough application." });
});

require("./app/routes/bread.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});