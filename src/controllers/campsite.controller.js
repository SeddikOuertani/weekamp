const db = require("../models");
const Campsite = db.campsite;

const {
  invalidRequest,
  successfulRequestCreation,
  notFoundRequest,
  successfulRequestGetting,
  successfulRequestUpdating,
  successfulRequestDeleting,
} = require("../utils/helper.util");

// Create Campsite
module.exports.create = async (req, res, next) => {
  try {
    const campsite = req.body;
    Campsite.create(campsite, (error, data) => {
      if (error) return invalidRequest(res, error);
      return successfulRequestCreation(res, data);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get Campsite by ID
module.exports.getById = async (req, res, next) => {
  try {
    const idCampsite = req.params.id;
    Campsite.findById(idCampsite, (error, data) => {
      if (error) return invalidRequest(res, error);
      if (!data) return notFoundRequest(res);
      return successfulRequestGetting(res, data);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get all Campsites
module.exports.getAll = async (req, res, next) => {
  try {
    Campsite.find({}, (error, data) => {
      if (error) return invalidRequest(res, error);
      if (!data) return notFoundRequest(res);
      return successfulRequestGetting(res, data);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Update campsite
module.exports.update = async (req, res, next) => {
  try {
    const campsite = req.body;
    Campsite.findOneAndUpdate({ _id: campsite.id }, campsite, (error, data) => {
      if (error) return invalidRequest(res, error);
      if (!data) return notFoundRequest(res);
      return successfulRequestUpdating(res);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// remove campsite
module.exports.delete = async (req, res, next) => {
  try {
    const idCampsite = req.params.id;
    Campsite.findOneAndDelete({ _id: idCampsite }, (error, data) => {
      if (error) return invalidRequest(res, error);
      if (!data) return notFoundRequest(res);
      return successfulRequestDeleting(res);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};
