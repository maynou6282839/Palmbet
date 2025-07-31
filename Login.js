import React from "react";

export default function Login() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-4 w-80">
      <h2 className="text-xl mb-4">Login / Register</h2>
      <input className="p-2 mb-2 w-full rounded" placeholder="Username" />
      <input className="p-2 mb-2 w-full rounded" type="password" placeholder="Password" />
      <button className="bg-yellow-500 w-full p-2 rounded">Enter</button>
    </div>
  );
}