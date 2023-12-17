const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
});

const ServiceModel = mongoose.model("Service", ServiceSchema);

module.exports = ServiceModel;
