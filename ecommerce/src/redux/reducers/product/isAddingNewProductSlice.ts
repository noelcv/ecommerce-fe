import { createSlice } from "@reduxjs/toolkit";


let initialState: boolean = false;

export const isAddingNewProduct = createSlice({
  name: "isAddingNewProduct",
  initialState: { value: initialState },
  reducers: {
    updateIsAddingNewProductState: (
      state: { value: boolean },
      action: { payload: boolean}
      ) => {
      state.value = action.payload;
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { updateIsAddingNewProductState } = isAddingNewProduct.actions;

export default isAddingNewProduct.reducer;
