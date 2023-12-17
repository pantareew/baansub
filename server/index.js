const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Slideshow = require("./models/slideshow");
const Blog = require("./models/blog");
const Service = require("./models/Service");
const Event = require("./models/event");

require("dotenv").config();

//express app
const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

//mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/mainSlides", async (req, res) => {
  try {
    const result = await Slideshow.findOne({ topic: "main" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/tipSlides", async (req, res) => {
  try {
    const result = await Slideshow.findOne({ topic: "tips" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/cSlides", async (req, res) => {
  try {
    const result = await Slideshow.findOne({ topic: "calendar" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/vdo", async (req, res) => {
  try {
    const result = await Slideshow.findOne({ topic: "vdo" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/history", async (req, res) => {
  try {
    const result = await Blog.findOne({ heading: "ประวัติความเป็นมา" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/royal", async (req, res) => {
  try {
    const result = await Blog.findOne({
      heading: "โครงการอันเนื่องมาจากพระราชดำริ",
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/services", async (req, res) => {
  try {
    const result = await Service.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/events", async (req, res) => {
  try {
    const result = await Event.find().sort({ start_date: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
