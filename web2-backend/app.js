//Import modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require("cors");
const postRoute = require("./routes/post");

const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.MONGO_DB;

//middlewares
app.use(BodyParser.json());
app.use(cors());
app.use("/posts", postRoute);

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error.message));
db.once("open", () => console.log("connected to db"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("connected to server");
});
