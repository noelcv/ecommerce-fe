import GET_ALL_PRODUCTS from "../../graphQL/queries/GET_ALL_PRODUCTS";
import { ProductType } from "../../types/ProductType";

const BASE_URL: string = "http://localhost:3000/products";
const GRAPHQL_API_URL: string = "http://localhost:3000/graphql";


export const editProduct = async (product: ProductType) => {
  try {
    const editedProduct = await fetch(`${BASE_URL}/${product.id}`, {
      method: "PATCH",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(product)
    })
    return await editedProduct;
  }
  catch(error) {
    console.log('Error at editProduct Service: ', error)
  }
}

export const deleteProduct = async (product: ProductType) => {
  try {
    const deletedProduct = await fetch(`${BASE_URL}/${product.id}`, {
      method: "DELETE",
      headers: {"Content-type":"application/json"},
    })
    return await deletedProduct;
  }
  catch(error) {
    console.log('Error at deleteProduct Service: ', error)
  } 
}