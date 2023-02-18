import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password minimal length 8 character"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      minLength: [9, "Phone Number minimal length 9 character"],
      maxLength: [13, "Phone Number maximal length 13 character"],
    },
    avatar: {
      type: String,
      default: "user.png",
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    role: {
        enum: ["admin", "user"],
        default: ["user"]
    }
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model("role", UserSchema);

export default Role;
