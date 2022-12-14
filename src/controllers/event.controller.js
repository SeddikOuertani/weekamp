const db = require("../models");
const Event = db.event;

const {
  invalidRequest,
  successfulRequestCreation,
  notFoundRequest,
  successfulRequestGetting,
  successfulRequestUpdating,
  successfulRequestDeleting,
} = require("../utils/helper.util");
const { getDaysDifference } = require("../utils/misc.util");

// Create Event
module.exports.create = async (req, res, next) => {
  try {
    const event = req.body;

    if (event.program) {

      let nbrDays = getDaysDifference(
        new Date(event.starDate),
        new Date(event.endDate)
      );

      let days = [];
      for (let i = 0; i < nbrDays; i++) {
        days.push({
          number: i + 1,
          activities: [],
        });
      }

      event.program = {
        nbrDays,
        days,
      };

    }


    Event.create(event, async (error, data) => {
      if (error) return invalidRequest(res, error);
      return successfulRequestCreation(res, data);
    });
  } catch {
    res.status(401).json({
      error: "Invalid request !",
    });
  }
};

// Get Event by ID
module.exports.getById = async (req, res, next) => {
  try {
    const idEvent = req.params.id;
    Event.findById(idEvent, (error, data) => {
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

// Get all Events
module.exports.getAll = async (req, res, next) => {
  try {
    Event.find({}, (error, data) => {
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

// Update event
module.exports.update = async (req, res, next) => {
  try {
    const event = req.body;
    Event.findOneAndUpdate({ _id: event.id }, event, (error, data) => {
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

// remove event
module.exports.delete = async (req, res, next) => {
  try {
    const idEvent = req.params.id;
    Event.findOneAndDelete({ _id: idEvent }, (error, data) => {
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
