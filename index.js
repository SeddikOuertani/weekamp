const express = require("express");
const createError = require("http-errors");
const db = require("./src/models");
const logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
const { Server } = require("socket.io");


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
app.use((req, res, next) => {
  next(createError(404));
});