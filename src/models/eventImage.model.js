const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventImage = new Schema(
  { 
    eventId : String,
    image : Buffer,
  },
  { collection: "EventImage", timestamps: true }
);

module.exports = mongoose.model("EventImage", EventImage);
