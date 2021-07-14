const express = require("express");

const { connect } = require("./db");
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// router
app.use(routes);

// connect to database and start server
const init = async () => {
  await connect();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

init();
