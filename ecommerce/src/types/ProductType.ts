import { cancelationPolicyType } from "./CancelationPolicyType";
import { UserType } from "./UserType";
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
  purchasedBy?: UserType[];
}