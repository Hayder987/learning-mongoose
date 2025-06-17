import { Model } from "mongoose";

export interface addressInterface {
  city: string;
  road: string;
  zip: number;
}

export interface UserI {
  name: string;
  email: string;
  age: number;
  password: string,
  role?: "user" | "admin";
  address: addressInterface
}

export interface createHashPassword extends Model<UserI> {
  hashPassword(password:string): string;
}
