import BalanceCard from "./components/BalanceCard";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";
import ExpensePieChart from "./components/ExpensePieChart";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-900">
      <header className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Expense Tracker</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <BalanceCard />
        <AddTransactionForm />
        <div className="grid gap-6 md:grid-cols-2">
          <TransactionList />
          <ExpensePieChart />
        </div>
      </main>
      <footer className="py-6" />
    </div>
  );
}
