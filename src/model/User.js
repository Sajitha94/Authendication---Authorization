import mongoose from "mongoose";

const UserSchema = new mongoose.Schema (
  {
    username: { type: String, require: true, trim: true },
    email: { type: String, require: true, unique: true, trim: true },
    password: { type: String, require: true, unique: true, trim: true },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    age: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
