import { createSlice } from "@reduxjs/toolkit";


let initialState: boolean = false;

export const isEditingSlice = createSlice({
  name: "isEditing",
  initialState: { value: initialState },
  reducers: {
    updateEditingState: (
      state: { value: boolean },
      action: { payload: boolean}
      ) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateEditingState } = isEditingSlice.actions;

export default isEditingSlice.reducer;
