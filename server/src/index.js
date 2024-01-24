const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const apiRoutes = require("./routes/index");

const app = express();

// configuring body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connect();
  console.log("mongo db connected");
});
