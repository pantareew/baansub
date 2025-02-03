const mongoose = require("mongoose");
const { Schema } = mongoose;
const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  desc: [{ type: String, required: true }],
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
