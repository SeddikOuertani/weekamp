const db = require("../models");
const Client = db.client;
const Program = db.program;


const {
  invalidRequest,
  successfulRequestCreation,
  notFoundRequest,
  successfulRequestGetting,
  successfulRequestUpdating,
  successfulRequestDeleting,
} = require("../utils/helper.util");

// Create Client
module.exports.create = async (req, res, next) => {
  try {
    const client = req.body;
    Client.create(client, (error, data) => {
      if (error) return invalidRequest(res, error);
      return successfulRequestCreation(res);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get Client by ID
module.exports.getById = async (req, res, next) => {
  try {
    const idClient = req.params.id;
    Client.findById(idClient, (error, data) => {
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

// Get all Clients
module.exports.getAll = async (req, res, next) => {
  try {
    Client.find({}, (error, data) => {
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

// Update client
module.exports.update = async (req, res, next) => {
  try {
    const client = req.body;
    Client.findOneAndUpdate({ _id: client.id }, client, (error, data) => {
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

// remove client
module.exports.delete = async (req, res, next) => {
  try {
    const idClient = req.params.id;
    Client.findOneAndDelete({ _id: idClient }, (error, data) => {
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
