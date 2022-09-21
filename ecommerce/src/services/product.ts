import GET_ALL_PRODUCTS from "../graphQL/queries/GET_ALL_PRODUCTS";
import { ProductType } from "../types/ProductType";

const BASE_URL: string = "http://localhost:3000/products";
const GRAPHQL_URL: string = "http://localhost:3000/graphql";

export const addNewProduct = async (product: ProductType) => {
  try { 
    const newProduct = await fetch(BASE_URL, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(product)
    })
    return await newProduct;
  }
  catch(error) {
    console.log('Error at addNewProduct Service: ', error)
  }
}

export const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        query: `query GetAllProducts {
          getAllProducts {
            id
            name
            price
            currency
            rating
            image
            category
            description
          }
        }`
      })
      
      
    });
    const parsedResponse = await response.json();
    console.log('parsedResponse', parsedResponse)
    const products = parsedResponse.data.getAllProducts;
    return products;
  }
  catch(error) {
    console.log('Error at getAllProducts Service: ', error)
  }
}

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