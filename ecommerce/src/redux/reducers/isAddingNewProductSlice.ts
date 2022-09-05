import { createSlice } from "@reduxjs/toolkit";


let initialState: boolean = false;

export const isAddingNewProduct = createSlice({
  name: "isEditing",
  initialState: { value: initialState },
  reducers: {
    updateAddingNewProductState: (
      state: { value: boolean },
      action: { payload: boolean}
      ) => {
      state.value = action.payload;
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { updateAddingNewProductState } = isAddingNewProduct.actions;

export default isAddingNewProduct.reducer;
