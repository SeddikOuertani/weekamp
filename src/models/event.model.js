const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema(
  {
    creatorId: String,
    campsiteId: String,
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    program: {
      nbrDays: Number,
      days: [
        {
          number: Number,
          activities: [
            {
              name: String,
              description: String,
              startTime: Date,
              endTime: Date,
            },
          ],
        },
      ],
    },
  },
  { collection: "Event", timestamps: true }
);

module.exports = mongoose.model("Event", Event);
