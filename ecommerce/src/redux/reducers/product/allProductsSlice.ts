import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../../types/ProductType';

let initialState: ProductType[] = [];

export const allProductsSlice = createSlice({
  name: 'allProducts',
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
    updateProductInStore: (
      state: { value: ProductType[] },
      action: { payload: ProductType }
    ) => {
      //find Item position in the products array
      //if we would find by ID, it would delete all products with the same ID
      let filteredItemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (filteredItemIndex >= 0) {
        //remove that item from the basket
        state.value.splice(filteredItemIndex, 1, action.payload);
      } else {
        console.log('item not found: ', action.payload);
      }
      return;
    },

    removeProductFromStore: (
      state: { value: ProductType[] },
      action: { payload: ProductType }
    ) => {
      //find Item position in the products array
      //if we would find by ID, it would delete all products with the same ID
      let filteredItemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (filteredItemIndex >= 0) {
        //remove that item from the basket
        state.value.splice(filteredItemIndex, 1);
      } else {
        console.log('item not found: ', action.payload);
      }
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allProducts, addProduct, updateProductInStore, removeProductFromStore } =
  allProductsSlice.actions;

export default allProductsSlice.reducer;
