import { ProductType } from '../../types/ProductType';
const GRAPHQL_API: string = import.meta.env.GRAPHQL_API;

export const addNewProduct = async (product: ProductType) => {
  try {
    return await fetch(GRAPHQL_API, {
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
