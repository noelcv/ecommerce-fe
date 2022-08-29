export type ProductType = {
  id?: string;
  name: string;
  price: number;
  currency?: string;
  rating?: number;
  image?: string;
  description?: string;
}


export type BasketType = {
  product?: ProductType;
  productId?: string;
  userId?: string;
}