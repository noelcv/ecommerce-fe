export type ProductType = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  currency?: string;
  category?: string;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
}


export type BasketType = {
  product?: ProductType;
  productId?: string;
  userId?: string;
}