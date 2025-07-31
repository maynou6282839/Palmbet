import React from "react";

export default function Wallet({ balance }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md mb-4 w-80">
      <h3 className="text-lg">Wallet Balance (TND)</h3>
      <p className="text-yellow-400 text-xl">{balance} TND</p>
    </div>
  );
}