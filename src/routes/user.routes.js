





module.exports = (app) => {
  const user = require("../controllers/user.controller");
  var router = require("express").Router();

  // Create a new user
  router.post("/", user.create);

  //get single user by id
  router.get("/:id", user.getById);

  //get all users
  router.get("/", user.getAll);

  // //register
  // router.post("/register", user.register);

  // // Login
  // router.post("/login", user.login);

  // Delete a User with id
  router.delete("/:id", user.delete);
  
  app.use("/api/users", router);
};
