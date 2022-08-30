import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/ProductType";

let initialState: ProductType[] = [];

export const ProductsSlice = createSlice({
  name: "basket",
  initialState: { value: initialState },
  reducers: {
    addProductToBasket: (
      state: { value: ProductType[] },
      action: { payload: ProductType[] }
    ) => {
      state.value = [...state.value, ...action.payload];
    },
    removeProductFromBasket: (
      state: { value: ProductType[] },
      action: { payload: ProductType[] }
    ) => {
      state.value = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToBasket, removeProductFromBasket } = ProductsSlice.actions;

export default ProductsSlice.reducer;
