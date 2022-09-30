import { cancelationPolicyType } from "./CancelationPolicyType";
import { Customer } from "./UserType";
import { LocationType } from "./LocationType";


export type ProductType = {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  currency?: string;
  category?: string;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
  date?: Date;
  location?: LocationType;
  isCancelable?: boolean;
  cancelationPolicy?: cancelationPolicyType;
  isRefundable?: boolean;
  orderedBy?: Customer[]
}