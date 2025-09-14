import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, clearAll } from "../features/transactions/transactionsSlice";

export default function AddTransactionForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const amt = Number(amount);
    if (!text.trim() || !amt || amt <= 0) return;
    dispatch(
      addTransaction({
        text,
        amount: amt,
        type,
        category: category || (type === "expense" ? "General" : "Salary"),
      })
    );
    setText("");
    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-5 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Add Transaction</h2>
        <button
          type="button"
          onClick={() => dispatch(clearAll())}
          className="text-xs rounded-full border border-white/30 px-3 py-1 text-white/80 hover:bg-white/10"
        >
          Clear All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className="border border-white/20 rounded-xl px-3 py-2 bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Title (e.g., Groceries, Salary)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="border border-white/20 rounded-xl px-3 py-2 bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <select
          className="border border-white/20 rounded-xl px-3 py-2 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          className="border border-white/20 rounded-xl px-3 py-2 bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Category (e.g., Food, Rent)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-4 py-2 font-medium shadow hover:shadow-lg ring-1 ring-white/20"
        >
          Add
        </button>
      </div>
    </form>
  );
}
