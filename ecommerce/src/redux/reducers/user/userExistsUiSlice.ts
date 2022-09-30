import { createSlice } from "@reduxjs/toolkit";

let initialState: boolean = true;

export const userExistsUiSlice = createSlice({
  name: "userExists",
  initialState: { value: initialState },
  reducers: {
    userExists: (
      state: { value: boolean },
      action: { payload: boolean }
    ) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { userExists } = userExistsUiSlice.actions;

export default userExistsUiSlice.reducer;
