import { createSelector } from "@reduxjs/toolkit";

export const selectTransactions = (s) => s.transactions.items;

export const selectTotalIncome = createSelector([selectTransactions], (items) =>
  items.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)
);

export const selectTotalExpense = createSelector([selectTransactions], (items) =>
  items.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
);

export const selectBalance = createSelector(
  [selectTotalIncome, selectTotalExpense],
  (income, expense) => income - expense
);

export const selectExpenseByCategory = createSelector([selectTransactions], (items) => {
  const map = new Map();
  for (const t of items) {
    if (t.type !== "expense") continue;
    map.set(t.category, (map.get(t.category) || 0) + t.amount);
  }
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
});
