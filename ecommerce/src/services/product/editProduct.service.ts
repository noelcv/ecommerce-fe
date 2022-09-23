import { ProductType } from '../../types/ProductType';

export const editProduct = async (product: ProductType) => {
  try {
    return await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { input: product },
        query: `
        mutation UpdateProduct($input: EditProductInput!) {
          updateProduct(input: $input) {
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
