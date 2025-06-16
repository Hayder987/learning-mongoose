export interface addressInterface {
  city: string;
  road: string;
  zip: number;
}

export interface UserI {
  name: string;
  email: string;
  age: number;
  role?: "user" | "admin";
  address: addressInterface
}
