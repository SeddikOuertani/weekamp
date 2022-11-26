const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Client = new Schema(
  {
    username : String,
    firstName : String,
    lastName : String,
    email: String,
    password : String,
  },
  { collection: "Client", timestamps: true }
);

module.exports = mongoose.model("Client", Client);
