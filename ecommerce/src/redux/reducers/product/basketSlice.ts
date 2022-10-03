import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../types/ProductType";

let initialState: ProductType[] = [];

export const BasketSlice = createSlice({
  name: "basket",
  initialState: { value: initialState },
  reducers: {
    addProductToBasket: (
      state: { value: ProductType[] },
      action: { payload: ProductType }
      ) => {
      console.log(action.payload, 'action.payload inside reducer')
      state.value = [...state.value, action.payload];
    },
    removeProductFromBasket: (
      state: { value: ProductType[] },
      action: { payload: ProductType }
    ) => {
      //find Item position in the products array
      //if we would find by ID, it would delete all products with the same ID
      let filteredItemIndex = state.value.findIndex((item) => item.id === action.payload.id);
        
      if (filteredItemIndex >= 0) {
        //remove that item from the basket
        state.value.splice(filteredItemIndex, 1);
      } else {
        console.log('item not found: ', action.payload)
      }
      return;
    },
    resetBasket: (state: { value: ProductType[]}) => {
      state.value = [];
    }
    
  },
});

// Action creators are generated for each case reducer function
export const { addProductToBasket, removeProductFromBasket, resetBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
