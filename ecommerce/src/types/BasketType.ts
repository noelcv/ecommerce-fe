import { ProductType } from "./ProductType";

export type BasketType = {
  product?: ProductType;
  productId?: string;
  userId?: string;
}