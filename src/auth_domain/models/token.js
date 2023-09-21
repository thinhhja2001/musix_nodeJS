import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  expiresIn: {
    type: Number,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  scope: {
    type: String,
    enum: ["VERIFICATION", "FORGOT"],
    required: true,
  },
});
export default mongoose.model("Token", tokenSchema);
