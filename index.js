const express = require("express");
const createError = require("http-errors");
const db = require("./src/models");
const logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const mongoose = require('mongoose');
const users = require("./src/models/users")
const bodyParser = require("body-parser")


// using bodyparser middleware
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
//using morgan logger
app.use(logger("dev"));

//using cors middleware
app.use(cors({ origin: "http://localhost:3000" }));

// Connecting with mongo db
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//   // including routes
// require("./src/routes/chatroom.routes")(app);
// require("./src/routes/user.routes")(app);
// require("./src/routes/message.routes")(app);

// Create port
const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader(
      "Access-Control-Allow-Headers","Origin, X-Reqyested-with , Content-Type , Accept"
  )
  res.setHeader(
      "Access-Control-Allow-Methods","Get , POST, PATCH , DELETE, PUT , OPTIONS"
  )
  next()
});


// Users Crud
app.get("/users",(req,res,next)=>{
  users.find().then(users =>{
      res.status(200).json({
          users
      })
  });
  
})
app.get("/api/users/:id",async (req,res)=>{
 users.findById(req.params.id).then(documents =>{
     res.status(200).json({
      message : "user added successfully",
      theuser :  documents
     })
 })
})
app.post("/users" ,(req,res,next) => {
  const user = new users({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
      salt : req.body.name.salt
  });
  user.save();
  res.status(201).json({
      message : "user added successfully"
  })
})

app.patch("/api/users/:id",async (req,res)=>{
  try {
      const updatedUser = await users.updateOne(
          {_id : req.params.id},
          {$set : req.body},
          {upsert : true}
      )
      res.json(updatedUser)
  }catch(err){
      res.json({meessage : err})
  }
})


app.delete("/api/users/:name",(req,res,next)=>{
  users.deleteOne({
      name : req.params.name
  })
  .then (res.status(200).json({message : "Post deleted!"}))
  
})





module.exports = app;
app.use((req, res, next) => {
  next(createError(404));
});