import { GenderEnum } from "./GenderEnum";
import { ProfileType } from "./ProfileType";

export type UserType = {
  id?: string;
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  birthDate?: Date;
  gender?: GenderEnum | undefined;
  profile?: ProfileType
  role: string;
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