import ProductComponent from "../../components/ProductComponent";
import { ProductType } from "../../types/ProductType";
const GRAPHQL_API_URL: string = "http://localhost:3000/graphql";

export const addNewProduct = async (product: ProductType) => {
  try { 
    const newProduct = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        variables: {input: product},
        query: `mutation AddABeautifulProduct($input: ProductInput!) {
          addABeautifulProduct(input: $input) {
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
        }
        ` 
        
      })
    })
    console.log(newProduct, 'newProduct from admin addform')
    const parsedResponse = await newProduct.json();
    console.log(parsedResponse, 'parsedResponse from admin addform')
    const success = parsedResponse.data.addABeautifulProduct.success;
    console.log(success, 'successsss from admin')
    return success;
  }
  catch(error) {
    console.log('Error at addNewProduct Service: ', error)
  }
}