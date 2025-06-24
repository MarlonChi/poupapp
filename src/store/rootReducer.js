import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import goalsTypesSlice from "./slices/goalsTypesSlice";
import transactionsSlice from "./slices/transactionsSlice";
import accountsSlice from "./slices/accountsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  objectives: goalsTypesSlice,
  transactions: transactionsSlice,
  accounts: accountsSlice,
});

export default rootReducer;
