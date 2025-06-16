import { model, Schema } from "mongoose";
import { addressInterface, UserI, UserModelType } from "../interfaces/user.interface";
import validator from 'validator';
import bcrypt from "bcryptjs";

const addressSchema = new Schema<addressInterface>({
  city: {type: String},
  road: {type: String},
  zip : {type: Number},
},
{
  _id: false
}
)

const userSchema = new Schema<UserI, UserModelType>({
  name: {
    type: String,
    minlength: [4, 'name atleast 4 character'],
    maxlength: 20,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: [true, 'email agei ase'],
    lowercase:true,
    trim: true,
    required: true,
    // use validate package
    validate: [validator.isEmail, "you give email wrong"],
    // custom
    // validate:{
    //   validator: (value)=>{
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    //   },
    //   message: (props) => `${props.value} is not a valid email!`
    // }
  },
  age:{
    type: Number,
    required:[true, 'age dewa hoy ni'],
    min: [18, 'age must be 18, got {VALUE}'],
    max: 60
  },
  password:{
    type: String,
    required: true,
    minlength: 4,
  },
  role:{
    type: String,
    enum: {
      values:["user", "admin"],
      message:"role will be user and admin, you give {VALUE}"
    },
    default:"user"
  },
  address:{
    type: addressSchema
  }
},
{
  versionKey:false,
  timestamps: true
}
);

userSchema.static('hashPassword', async function (plainPassword:string) {
  const password = await bcrypt.hash(plainPassword, 10)
  return password
});

export const User = model<UserI, UserModelType>('User', userSchema);
