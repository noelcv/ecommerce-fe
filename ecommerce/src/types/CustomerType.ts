import { GenderType } from "./GenderType";

export type Customer = {
  id?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  birthDate?: Date;
  gender?: GenderType;
}