import { ProductType } from '../../types/ProductType';

export const orderProducts = async (products: ProductType[]) => {
  try {
    return await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { input: products },
        query: `
        mutation OrderProducts($input: OrderProductsInput!) {
          orderProduct(input: $input) {
            code
            success
            message
            product {
              id
              name
              price
              currency
              description
              image
              category
              rating
              date
              location
              createdAt
              updatedAt
              isCancelable
              cancelationPolicy
              isRefundable
              refundPolicy
              venueCapacity
              quantityInStock
            }
          }
        }`,
      }),
    });
  } catch (error) {
    console.log('Error at editProduct Service: ', error);
  }
};
