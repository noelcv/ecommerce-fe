import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/ProductType";

let initialState: ProductType = {
  id: "",
  name: "",
  description: "",
  image: "", 
  price: 0,
  currency: "",
  category: "",
  rating: 0,
  createdAt: "",
  updatedAt: ""
};

export const ProductSlice = createSlice({
  name: "product",
  initialState: { value: initialState },
  reducers: {
    updateProduct: (
      state: { value: ProductType },
      action: { payload: ProductType }
      ) => {
      console.log(action.payload, 'action.payload inside updateProduct reducer')
      state.value = {...state.value, ...action.payload};
    },
    
    updatedProduct: (
      state: { value: ProductType },
      action: { payload: ProductType }
      ) => {
      console.log(action.payload, 'action.payload inside updatedProduct reducer')
      state.value = {...state.value, ...action.payload};
    }, 
    
  },
});

// Action creators are generated for each case reducer function
export const { updateProduct, updatedProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
