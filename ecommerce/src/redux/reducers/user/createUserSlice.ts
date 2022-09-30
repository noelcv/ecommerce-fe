import { createSlice } from "@reduxjs/toolkit";
import { GenderEnum } from "../../../types/GenderEnum";
import { RoleEnum } from "../../../types/RoleEnum";
import { UserType } from "../../../types/UserType";

let initialState: UserType = {
  id: undefined,
  uid: undefined,
  email: "", 
  firstName: "",
  lastName: "",
  username: "",
  birthDate: undefined,
  role: RoleEnum.basic,
  gender: GenderEnum.male
};

export const createUserSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    setUser: (
      state: { value: UserType },
      action: { payload: UserType }
    ) => {
      state.value = action.payload;
    },
    defineRole: (
      state: { value: UserType},
      action: { payload: RoleEnum }
    ) => {
      state.value.role = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser, defineRole } = createUserSlice.actions;

export default createUserSlice.reducer;
