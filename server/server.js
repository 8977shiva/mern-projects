import express from "express";
import path from "path";

import devBundle from "./devBundle";
import template from "./../template";
const mongoose = require("mongoose");
// const path = require("path");

const app = express();
devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.get("/", (req, res) => {
  res.status(200).send(template());
});

//monogodb
// const url =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/mernSimpleSetup";
// MongoClient.connect(url, (err, db) => {
//   console.log("Connected successfully to mongodb server");
//   db.close();
// });
mongoose.connect(
  "mongodb+srv://shiva:8977shiva@shivamongo-pmm8n.mongodb.net/shiva?authSource=admin&replicaSet=shivamongo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
  }
);

//express config
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
