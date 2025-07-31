import React, { useState } from "react";

export default function SlotGame() {
  const symbols = ["🍒", "🍋", "⭐", "7️⃣"];
  const [result, setResult] = useState(["❓", "❓", "❓"]);

  const spin = () => {
    const newResult = Array(3).fill().map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    setResult(newResult);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center w-80">
      <h3 className="mb-2">🎰 Slot Machine</h3>
      <div className="flex justify-center space-x-2 text-2xl mb-2">
        {result.map((s, i) => <span key={i}>{s}</span>)}
      </div>
      <button onClick={spin} className="bg-yellow-500 px-4 py-2 rounded">Spin</button>
    </div>
  );
}