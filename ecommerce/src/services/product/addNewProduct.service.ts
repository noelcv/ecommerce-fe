import { ProductType } from '../../types/ProductType';

export const addNewProduct = async (product: ProductType) => {
  try {
    return await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { input: product },
        query: `mutation AddNewProduct($input: ProductInput!) {
          addNewProduct(input: $input) {
            code
            success
            message
            product {
              id
              name
              description
              price
              currency
              image
              category
              location
              date
              isCancelable
              cancelationPolicy
              isRefundable
              refundPolicy
              quantityInStock
              venueCapacity
            }
          }
        }`,
      }),
    });
  } catch (error) {
    console.log('Error at addNewProduct Service: ', error);
  }
};
