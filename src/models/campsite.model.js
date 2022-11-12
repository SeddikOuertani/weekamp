const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Campsite = new Schema(
  {
    name : String,
    type : String,
    region : String,
  },
  { collection: "Campsite", timestamps: true }
);

module.exports = mongoose.model("Campsite", Campsite);
