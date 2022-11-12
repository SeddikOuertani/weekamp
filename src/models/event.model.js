const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema(
  {
    creatorId : String,
    campsiteId:  String,
    name : String,
    description : String,
    startDate : Date,
    endDate : Date,
    programId : String,
  },
  { collection: "Event", timestamps: true }
);

module.exports = mongoose.model("Event", Event);
