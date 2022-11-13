const express = require('express');
const router = express.Router();

module.exports = (app) => {
    const client = require("../controllers/client.controller");
    var router = require("express").Router();

    // router.post("/login", client.login)
    // router.post("/register", client.register);
    router.post("/clients", client.create);
    router.get("/clients/:id", client.getById);
    router.get("/clients", client.getAll);
    router.put("/clients",client.update);
    router.delete("/clients/:id", client.delete);

    app.use(router);
}