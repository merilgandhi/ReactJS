import React, { useId } from 'react';

function Input({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountdisabled = false,
  curreydisabled = false,
  className = "",
}) {
  const amountinputid = useId();

  return (
    <div className={`bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl ${className}`}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <label htmlFor={amountinputid} className="block text-white/80 text-sm font-medium mb-3">
            {label}
          </label>
          <input
            id={amountinputid}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white text-2xl font-bold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            type="number"
            placeholder="0.00"
            disabled={amountdisabled}
            value={amount}
            onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col items-end">
          <p className="text-white/80 text-sm font-medium mb-3">Currency</p>
          <select
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-4 py-4 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 min-w-[100px]"
            value={selectcurrency}
            onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
            disabled={curreydisabled}
          >
            {currencyoptions.map((currency) => (
              <option key={currency} value={currency} className="bg-gray-800 text-white">
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
