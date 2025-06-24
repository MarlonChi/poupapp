import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  accounts: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const newAccount = action.payload;
      state.accounts.push({ id: uuidv4(), ...newAccount });
    },
  },
});

export const { addAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
