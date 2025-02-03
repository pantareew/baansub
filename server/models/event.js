const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  start_date: {
    type: Date,
    required: true,
  },

  finish_date: {
    type: Date,
  },
});

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
