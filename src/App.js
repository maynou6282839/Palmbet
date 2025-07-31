import React from "react";
import Login from "./pages/Login";
import Wallet from "./components/Wallet";
import SlotGame from "./components/SlotGame";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-500">
      <h1 className="text-4xl font-bold mb-6">PalmBet Casino</h1>
      <Login />
      <Wallet balance={1000} />
      <SlotGame />
    </div>
  );
}

export default App;
