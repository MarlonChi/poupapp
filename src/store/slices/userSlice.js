import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  income: "",
  financialObjective: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, income, financialObjective } = action.payload;
      state.name = name;
      state.income = income;
      state.financialObjective = financialObjective;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
