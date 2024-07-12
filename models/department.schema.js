import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
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
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  mapImage: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  special_investigations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SpecialInvestigation",
    },
  ],
});
module.exports = mongoose.model("Department", departmentSchema);
