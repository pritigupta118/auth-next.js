import mongoose from 'mongoose'
import { type } from 'os'

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please proveide a username"],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Please proveide a email"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please proveide a password"],
    },
    isVerfied: {
      type: Boolean,
      default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
},
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
  }
)

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;