import { ProductType } from "../types/ProductType";

const BASE_URL: string = "http://localhost:3000/products";

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
    const products = await fetch(BASE_URL);
    return await products.json();
  }
  catch(error) {
    console.log('Error at getAllProducts Service: ', error)
  }
}