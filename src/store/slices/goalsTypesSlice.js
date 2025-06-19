import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objective: {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  },
};

const goalsTypesSlice = createSlice({
  name: "objectives",
  initialState,
});

export default goalsTypesSlice.reducer;
