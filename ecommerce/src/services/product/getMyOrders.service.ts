import { PurchaseOrderType } from "../../types/PurchaseOrderType";
import * as dayjs from "dayjs"

//TODO: strengthen the headers
export const getMyOrders = async (uid: string) => {
  try {
    console.log('uid inside setOrder service', uid  )
   
    const response = await fetch(import.meta.env.VITE_GRAPHQL_API, {
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

    const parsedResponse = await response.json();
    if (parsedResponse.data.findOrdersByUserId.code === 200) {
      
      const orders = parsedResponse.data.findOrdersByUserId.orders;
      orders.forEach((order: PurchaseOrderType) => {
        let temp = Number(order.createdAt)
        order.createdAt = dayjs(temp).format('DD/MM/YYYY HH:mm')
      })
    
      return orders;
    } else {
      return `Error: ${parsedResponse.data.findOrdersByUserId.message}`
    } 
  } catch (error) {
    console.log('Error at editProduct Service: ', error);
  }
};
