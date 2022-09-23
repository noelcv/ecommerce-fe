const GRAPHQL_API: string = import.meta.env.GRAPHQL_API || 'http://localhost:3000/graphql';

import { ProductType } from '../../types/ProductType';

export const deleteProduct = async (product: ProductType) => {
  try {
    return await fetch(GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { deleteProductId: product.id },
        query: `
        mutation DeleteProduct($deleteProductId: String!) {
          deleteProduct(id: $deleteProductId) {
            code
            success
            message
            product {
              id
              name
              description
              price
              currency
              createdAt
              updatedAt
            }
          }
        }`,
      }),
    });
  } catch (error) {
    console.log('Error at deleteProduct Service: ', error);
  }
};
