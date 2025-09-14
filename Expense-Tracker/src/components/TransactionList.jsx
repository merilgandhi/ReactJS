import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../features/transactions/selectors";
import { deleteTransaction } from "../features/transactions/transactionsSlice";

export default function TransactionList() {
  const items = useSelector(selectTransactions);
  const dispatch = useDispatch();

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-5">
      <h2 className="text-lg font-semibold text-white mb-2">Transactions</h2>
      <ul className="divide-y divide-white/10">
        {items.map((t) => (
          <li key={t.id} className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-white">{t.text}</p>
              <p className="text-sm text-white/70">
                {t.type.toUpperCase()} • {t.category}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`font-semibold ${
                  t.type === "income" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {t.type === "income" ? "+" : "-"}₹ {t.amount.toFixed(2)}
              </span>
              <button
                className="text-xs text-white bg-rose-500/80 hover:bg-rose-500 px-3 py-1 rounded-lg shadow"
                onClick={() => dispatch(deleteTransaction(t.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {items.length === 0 && (
          <li className="py-6 text-center text-white/70">No transactions yet</li>
        )}
      </ul>
    </div>
  );
}
