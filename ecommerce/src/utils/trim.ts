import { ProductType } from '../types/ProductType';

export default function trim(product: ProductType, productsArr: ProductType[]): ProductType[] {
  return productsArr.filter((item) => item.id !== product.id);
}
