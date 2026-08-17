import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);