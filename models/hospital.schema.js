import mongoose from "mongoose";
import { Short } from "./shorts.schema";
const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  tag: [
    {
      type: String,
    },
  ],
  branches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  ],
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
  official_services: [{}],
  shorts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Short",
    },
  ],
});
module.exports = mongoose.model("Hospital", hospitalSchema);
