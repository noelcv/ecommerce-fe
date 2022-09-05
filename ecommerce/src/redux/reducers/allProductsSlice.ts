import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/ProductType";

let initialState: ProductType[] = [];

export const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: { value: initialState },
  reducers: {
    allProducts: (
      state: { value: ProductType[] },
      action: { payload: ProductType[] }
    ) => {
      state.value = action.payload;
    },
    addProduct: (
      state: { value: ProductType[] },
      action: { payload: ProductType }
    ) => {
      state.value = [...state.value, action.payload];
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { allProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;
