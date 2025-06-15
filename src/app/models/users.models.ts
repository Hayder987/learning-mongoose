import { model, Schema } from "mongoose";
import { UserI } from "../interfaces/user.interface";

const userSchema = new Schema<UserI>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  role:{
    type: String,
    enum: ["user", "admin"],
    default:"user"
  }
},
{
  versionKey:false,
  timestamps: true
}
);

export const User = model('User', userSchema);
