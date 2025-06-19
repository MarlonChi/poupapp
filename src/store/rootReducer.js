import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import goalsTypesSlice from "./slices/goalsTypesSlice";
import transactionsSlice from "./slices/transactionsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  objectives: goalsTypesSlice,
  transactions: transactionsSlice,
});

export default rootReducer;
