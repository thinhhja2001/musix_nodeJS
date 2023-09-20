import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  ownerID: {
    type: String,
    required: true,
  },
  ownerUsername: {
    type: String,
    required: true,
  },
  fileID: {
    type: String,
    required: true,
  },
  thumbnailID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    max: 255,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
    required: false,
  },
  dateCreated: {
    type: Number,
  },
  lastModified: {
    type: Number,
  },
  likedBy: {
    type: [String],
    required: false,
  },
  fileUrl: {
    type: String,
  },
  postStatus: {
    type: String,
    enum: ["BLOCK", "OPEN"],
  },
  fileName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Post", postSchema);
