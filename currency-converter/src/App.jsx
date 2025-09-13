import { useState } from 'react';
import Input from './components/Input';
import useCurrencyInfo from './hooks/usecurrencyinfo';

function App() {
  const [amount, setamount] = useState(1);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convert, setconvert] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const currencyoptions = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setamount(convert);
    setconvert(amount);
  };

  const conversion = () => {
    setconvert(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-5">
            Currency Converter
          </h1>
          <p className="text-white/60 text-lg">Convert currencies in real-time</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              conversion();
            }}
          >
            <div className="mb-6">
              <Input
                label="From"
                amount={amount}
                currencyoptions={currencyoptions}
                oncurrencychange={(currency) => setfrom(currency)}
                selectcurrency={from}
                onamountchange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative flex justify-center mb-6">
              <button
                type="button"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={swap}
                title="Swap currencies"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <Input
                label="To"
                amount={convert}
                currencyoptions={currencyoptions}
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={to}
                amountdisabled
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 text-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

          {convert > 0 && (
            <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="text-white/80 text-center">
                <span className="font-bold text-cyan-400">1 {from.toUpperCase()}</span>
                <span className="mx-2">=</span>
                <span className="font-bold text-emerald-400">
                  {currencyInfo[to] ? currencyInfo[to].toFixed(4) : '...'} {to.toUpperCase()}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-white/40 text-sm">Real-time exchange rates</p>
        </div>
      </div>
    </div>
  );
}

export default App;
