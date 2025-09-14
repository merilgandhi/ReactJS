import { useSelector } from "react-redux";
import { selectBalance, selectTotalIncome, selectTotalExpense } from "../features/transactions/selectors";

function Stat({ label, value, accent }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-5 transition hover:shadow-2xl">
      <p className="text-sm text-white/80">{label}</p>
      <p className={`mt-1 text-3xl font-semibold ${accent}`}>₹ {value.toFixed(2)}</p>
    </div>
  );
}

export default function BalanceCard() {
  const balance = useSelector(selectBalance);
  const income = useSelector(selectTotalIncome);
  const expense = useSelector(selectTotalExpense);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Stat label="Balance" value={balance} accent="text-white" />
      <Stat label="Income" value={income} accent="text-emerald-300" />
      <Stat label="Expense" value={expense} accent="text-rose-300" />
    </div>
  );
}
