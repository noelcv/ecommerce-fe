import { ProductType } from "../types/ProductType";

const db=[];

const BASE_URL: string = "tbd"

export const pushNewProduct = async (product: ProductType) => {
  try { 
    const newProduct = await db.push(product);
    return await newProduct;
  }
  catch(error) {
    console.log('Error at addNewProduct Service: ', error)
  }
}



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