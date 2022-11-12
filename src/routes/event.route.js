const express = require('express');
const router = express.Router();

module.exports = (app) => {
    const event = require("../controllers/event.controller");
    var router = require("express").Router();

    router.post("/events", event.create);
    router.get("/events/:id", event.getById);
    router.get("/events", event.getAll);
    router.put("/events",event.update);
    router.delete("/events/:id", event.delete);
}