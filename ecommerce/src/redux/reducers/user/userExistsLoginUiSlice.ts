import { createSlice } from "@reduxjs/toolkit";

let initialState: boolean = true;

export const userExistsLoginUiSlice = createSlice({
  name: "userExistsLoginUi",
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
export const { userExists } = userExistsLoginUiSlice.actions;

export default userExistsLoginUiSlice.reducer;
