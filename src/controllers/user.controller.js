const db = require("../models");
const User = db.user;

const {
  invalidRequest,
  successfulRequestCreation,
  notFoundRequest,
  successfulRequestGetting,
  successfulRequestUpdating,
  successfulRequestDeleting,
} = require("../utils/helper.util");

// Create User
module.exports.create = async (req, res, next) => {
  try {
    const user = req.body;
    User.create(user, (error, data) => {
      if (error) return invalidRequest(res, error);
      return successfulRequestCreation(res, data);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get User by ID
module.exports.getById = async (req, res, next) => {
  try {
    const idUser = req.params.id;
    User.findById(idUser, (error, data) => {
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

// Get all Users
module.exports.getAll = async (req, res, next) => {
  try {
    User.find({}, (error, data) => {
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

// Update user
module.exports.update = async (req, res, next) => {
  try {
    const user = req.body;
    User.findOneAndUpdate({ _id: user.id }, user, (error, data) => {
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

// remove user
module.exports.delete = async (req, res, next) => {
  try {
    const idUser = req.params.id;
    User.findOneAndDelete({ _id: idUser }, (error, data) => {
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