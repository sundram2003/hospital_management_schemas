import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: "enum",
    enum: ["news", "article"],
    required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  thumbnail: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  shareCount: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Blog", blogSchema);
