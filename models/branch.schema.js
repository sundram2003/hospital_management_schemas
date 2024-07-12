import mongoose from "mongoose";
import { Department } from "./department.schema.js";
const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mapImage: {
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  about: {
    type: String,
  },
  logo: {
    type: String,
  },
  departments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
  ],
});
module.exports = mongoose.model("Branch", branchSchema);
