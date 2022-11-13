const db = require("../models");
const Program = db.program;

const {
  invalidRequest,
  successfulRequestCreation,
  notFoundRequest,
  successfulRequestGetting,
  successfulRequestUpdating,
  successfulRequestDeleting,
} = require("../utils/helper.util");

// Create Program
module.exports.create = async (req, res, next) => {
  try {
    const program = req.body;
    Program.create(program, (error, data) => {
      if (error) return invalidRequest(res, error);
      return successfulRequestCreation(res);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get Program by ID
module.exports.getById = async (req, res, next) => {
  try {
    const idProgram = req.params.id;
    Program.findById(idProgram, (error, data) => {
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

// Get all Programs
module.exports.getAll = async (req, res, next) => {
  try {
    Program.find({}, (error, data) => {
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

// Update program
module.exports.update = async (req, res, next) => {
  try {
    const program = req.body;
    Program.findOneAndUpdate({ _id: program.id }, program, (error, data) => {
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

// remove program
module.exports.delete = async (req, res, next) => {
  try {
    const idProgram = req.params.id;
    Program.findOneAndDelete({ _id: idProgram }, (error, data) => {
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
