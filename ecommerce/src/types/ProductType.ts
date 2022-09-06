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
}


export type BasketType = {
  product?: ProductType;
  productId?: string;
  userId?: string;
}