const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Program = new Schema(
  {
    eventId : String,
    nbrDays : Number,
    days : [
        {
            title : String,
            description : String,
            activities : [
                {
                    name : String,
                    description : String,
                    startTime : Date,
                    endTime : Date,
                }
            ]            
        }
    ]
  },
  { collection: "Program", timestamps: true }
);

module.exports = mongoose.model("Program", Program);
