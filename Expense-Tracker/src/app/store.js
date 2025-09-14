import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";
import { loadState, saveState } from "../utils/persist";

const preloaded = loadState();

export const store = configureStore({
  reducer: { transactions: transactionsReducer },
  preloadedState: preloaded,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({ transactions: { items: state.transactions.items } });
});
