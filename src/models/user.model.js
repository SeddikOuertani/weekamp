const mongoose =require("mongoose")

const userSchema = new mongoose.Schema(
    {
      username : String,
      firstName : String,
      lastName : String,
      email: String,
      password : String,
    },
    { collection: "User", timestamps: true }
  );

module.exports = mongoose.model("User " , userSchema)