import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/ProductType";

let initialState: ProductType[] = [];

export const AllProductsSlice = createSlice({
  name: "products",
  initialState: { value: initialState },
  reducers: {
    allProducts: (
      state: { value: ProductType[] },
      action: { payload: ProductType[] }
    ) => {
      state.value = action.payload;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { allProducts } = AllProductsSlice.actions;

export default AllProductsSlice.reducer;
