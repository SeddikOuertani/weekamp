const express = require('express');
const router = express.Router();

module.exports = (app) => {
    const program = require("../controllers/program.controller");
    var router = require("express").Router();

    router.post("/programs", program.create);
    router.get("/programs/:id", program.getById);
    router.get("/programs", program.getAll);
    router.put("/programs",program.update);
    router.delete("/programs/:id", program.delete);
}