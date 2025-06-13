import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  income: "",
  financialObjective: "",
  dailyBudget: 0,
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
    setDailyBudget: (state, action) => {
      const income = action.payload;
      state.income = parseFloat(income);
      state.dailyBudget = Math.floor(income / 30);
    },
  },
});

export const { setUser, setDailyBudget } = userSlice.actions;

export default userSlice.reducer;
