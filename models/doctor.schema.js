import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  opdSchedule: {
    type: String,
  },
  wardSchedule: {
    type: String,
  },
  otherSchedule: {
    type: String,
  },
  about: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});
