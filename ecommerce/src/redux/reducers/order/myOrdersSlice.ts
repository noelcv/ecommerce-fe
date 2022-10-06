import { createSlice } from '@reduxjs/toolkit';
import { PurchaseOrderType } from '../../../types/PurchaseOrderType';

let initialState: PurchaseOrderType[] = [];

export const myOrdersSlice = createSlice({
  name: 'myOrders',
  initialState: { value: initialState },
  reducers: {
    setMyOrders: (
      state: { value: PurchaseOrderType[] },
      action: { payload: PurchaseOrderType[] }
    ) => {
      state.value = action.payload;
    },
    updateOrderInStore: (
      state: { value: PurchaseOrderType[] },
      action: { payload: PurchaseOrderType }
    ) => {
      //find Item position in the orders array
      let filteredOrderIndex = state.value.findIndex(
        (order) => order.id === action.payload.id
      );

      if (filteredOrderIndex >= 0) {
        //remove that order and replace it with the updated one
        state.value.splice(filteredOrderIndex, 1, action.payload);
      } else {
        console.log('order not found: ', action.payload);
      }
      return;
    },

    removeOrderFromStore: (
      state: { value: PurchaseOrderType[] },
      action: { payload: PurchaseOrderType }
    ) => {
      //find Item position in the products array
      //if we would find by ID, it would delete all products with the same ID
      let filteredOrderIndex = state.value.findIndex(
        (order) => order.id === action.payload.id
      );

      if (filteredOrderIndex >= 0) {
        //remove that order from the basket
        state.value.splice(filteredOrderIndex, 1);
      } else {
        console.log('order not found: ', action.payload);
      }
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMyOrders, updateOrderInStore, removeOrderFromStore } =
  myOrdersSlice.actions;

export default myOrdersSlice.reducer;
