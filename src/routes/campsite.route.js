const express = require('express');
const router = express.Router();

module.exports = (app) => {
    const campsite = require("../controllers/campsite.controller");
    var router = require("express").Router();

    router.post("/campsites", campsite.create);
    router.get("/campsites/:id", campsite.getById);
    router.get("/campsites", campsite.getAll);
    router.put("/campsites",campsite.update);
    router.delete("/campsites/:id", campsite.delete);
}