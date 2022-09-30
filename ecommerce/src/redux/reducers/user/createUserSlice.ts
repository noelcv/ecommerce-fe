import { createSlice } from "@reduxjs/toolkit";
import { GenderEnum } from "../../../types/GenderEnum";
import { RoleEnum } from "../../../types/RoleEnum";
import { UserType } from "../../../types/UserType";

let initialState: UserType = {
  id: "",
  uid: "",
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
    createUser: (
      state: { value: UserType },
      action: { payload: UserType }
    ) => {
      state.value = state.value, action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { createUser } = createUserSlice.actions;

export default createUserSlice.reducer;