import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required field"],
      trim: true,
      minLength: [4, "username must be at least 4 characters"],
    },
    email: {
      type: String,
      required: [true, "email is required field"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid email"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "password is required field"],
      minLength: [6, "password must be at least 6 characters"],
    },
    confirmPassword: {
      type: String,
      select: false,
      required: [true, "confirm password is required field"],
      minLength: [6, "confirm password must be at least 6 characters"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password and Confirm password do not match",
      },
    },
  },
  {
    timestamps: true,
  }
);

//pre middleware

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = async function (pwd, pwdDB) {
  return await bcrypt.compare(pwd, pwdDB);
};

const User = model("User", userSchema);
export default User;
