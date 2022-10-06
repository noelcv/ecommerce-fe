import { ProductType } from '../../types/ProductType';

export const setOrder = async (uid: string, products: ProductType[]) => {
  try {
    console.log('products inside setOrder service', products)
    return await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { uid: uid, input: products },
        query: `
        mutation SetOrder($uid: String!, $products: [EditProductInput!]) {
          setOrder(uid: $uid, products: $products) {
            code
            success
            message
            order {
              id
              createdAt
              userId
              productId
              ref
            }
          }
          }
        `,
      }),
    });
  } catch (error) {
    console.log('Error at editProduct Service: ', error);
  }
};
