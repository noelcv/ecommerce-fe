import { createSlice } from "@reduxjs/toolkit";

let initialState: boolean = true;

export const userExistsRegisterUiSlice = createSlice({
  name: "userExistsRegisterUi",
  initialState: { value: initialState },
  reducers: {
    isNewUser: (
      state: { value: boolean },
      action: { payload: boolean }
    ) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { isNewUser } = userExistsRegisterUiSlice.actions;

export default userExistsRegisterUiSlice.reducer;
