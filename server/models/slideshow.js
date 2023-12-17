const mongoose = require("mongoose");
const { Schema } = mongoose;
const SlideshowSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      imageUrl: {
        type: String,
      },
      imageName: {
        type: String,
      },
      imageDesc: {
        type: String,
      },
    },
  ],
  vdoUrl: {
    type: String,
  },
});

const SlideshowModel = mongoose.model("Slideshow", SlideshowSchema);

module.exports = SlideshowModel;
