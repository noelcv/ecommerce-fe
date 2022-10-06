
//TODO: strengthen the headers
export const getMyOrders = async (uid: string) => {
  try {
    console.log('uid inside setOrder service', uid  )
   
    return await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { uid: uid},
        query: `
          query FindOrdersByUserId($uid: String!) {
            findOrdersByUserId(uid: $uid) {
              code
              success
              message
              orders {
                id
                userId
                createdAt
                productId
                name
                price
                currency
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
