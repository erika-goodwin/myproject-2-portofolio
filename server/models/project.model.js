const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectListSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minlength: 3,
    },
    LangTag: {
      type: Array,
      trim: true,
      required: true,
    },
    deployedUrl: {
      type: String,
      trim: true,
      required: true,
    },
    githubUrl: {
      type: String,
      trim: true,
      required: true,
    },
    summary: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProjectList", projectListSchema);
