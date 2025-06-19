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
    updateBudget: (state, action) => {
      let value = Math.abs(action.payload.valor);

      if (action.payload.tipo !== "receita") {
        value = -value;
      }

      state.dailyBudget += parseFloat(value);
    },
  },
});

export const { setUser, setDailyBudget, updateBudget } = userSlice.actions;

export default userSlice.reducer;
