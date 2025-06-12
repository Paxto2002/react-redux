import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleDecrementClick = () => dispatch(decrement());
  const handleIncrementClick = () => dispatch(increment());
  const handleResetClick = () => dispatch(reset());
  const handleIncAmountClick = () =>
    dispatch(incrementByAmount(Number(amount) || 0));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans px-4">
      <div className="bg-[#1e293b] p-10 rounded-xl shadow-lg w-full max-w-sm border border-[#334155] transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,255,204,0.3)]">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-100 tracking-tight">
          🚀 Paxto Redux Counter
        </h1>

        <p className="text-center text-6xl font-bold text-cyan-400 mb-10 drop-shadow-sm">
          {count}
        </p>

        <div className="flex justify-between gap-3 mb-6">
          <button
            onClick={handleIncrementClick}
            className="flex-1 bg-[#38bdf8] hover:bg-[#0ea5e9] transition-all duration-200 px-4 py-2 rounded-md text-black font-semibold shadow hover:scale-105"
          >
            +
          </button>
          <button
            onClick={handleDecrementClick}
            className="flex-1 bg-[#facc15] hover:bg-[#eab308] transition-all duration-200 px-4 py-2 rounded-md text-black font-semibold shadow hover:scale-105"
          >
            −
          </button>
          <button
            onClick={handleResetClick}
            className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] transition-all duration-200 px-4 py-2 rounded-md text-white font-semibold shadow hover:scale-105"
          >
            Reset
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 bg-[#0f172a] text-white border border-cyan-500 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <button
            onClick={handleIncAmountClick}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-200 px-4 py-2 rounded-md text-black font-semibold shadow hover:scale-[1.03]"
          >
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
