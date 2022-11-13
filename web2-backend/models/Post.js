const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailOfDeveloper: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    min: 42,
    max: 42,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("PostSchema", PostSchema);
