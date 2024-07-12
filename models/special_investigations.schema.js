import mongoose from "mongoose";
import { Procedure } from "./procedures.schema.js";
const specialInvestigationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    category: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
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
  procedures: [
    //doubt
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Procedure",
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model(
  "SpecialInvestigation",
  specialInvestigationsSchema
);
