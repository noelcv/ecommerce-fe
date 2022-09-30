import { GenderEnum } from "./GenderEnum";

export type UserType = {
  id: string;
  uid?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  birthDate?: Date;
  role: string;
  gender?: GenderEnum | undefined;
}

export type UserTypeInput = {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  birthDate?: Date;
  role: string;
  gender?: GenderEnum | undefined;
}