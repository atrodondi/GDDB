const products = require("../CHI");
const db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garageDB");

db.CHIdoor.remove({})
  .exec() // remove all Resource docs
  .then(() =>
    db.CHIdoor.collection
      .insertMany(products) // add Resource seeds
      .then((dbRsc) => {
        console.log(dbRsc.result.n + " resource records inserted!");
        process.exit(0);
      })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
