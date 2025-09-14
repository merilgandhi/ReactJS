import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { items: [] };

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare({ text, amount, type, category, id }) {
        return {
          payload: {
            id: id || nanoid(),
            text: (text || "").trim(),
            amount: Number(amount),
            type, // "income" | "expense"
            category: (category || "").trim() || "Uncategorized",
          },
        };
      },
    },
    deleteTransaction(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    clearAll(state) {
      state.items = [];
    },
  },
});

export const { addTransaction, deleteTransaction, clearAll } = transactionsSlice.actions;
export default transactionsSlice.reducer;
