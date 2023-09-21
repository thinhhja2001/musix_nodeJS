import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 225,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  status: {
    type: String,
    required: true,
    enum: ["VERIFIED", "UNVERIFIED"],
    default: "UNVERIFIED",
  },
});

export default mongoose.model("User", userSchema);
