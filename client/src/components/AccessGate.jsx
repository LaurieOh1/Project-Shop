import React, { useState } from "react";

const PASS = import.meta.env.VITE_PREVIEW_PASS; // set in hosting env

export default function AccessGate({ children }) {
  const [ok, setOk] = useState(() => localStorage.getItem("preview_ok")==="1");
  const [input, setInput] = useState("");

  if (ok) return children;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-sm w-full border rounded p-6 space-y-4">
        <h1 className="text-xl font-semibold">Private Preview</h1>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter access code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-full bg-black text-white rounded py-2"
          onClick={() => {
            if (input === PASS) {
              localStorage.setItem("preview_ok", "1");
              setOk(true);
            } else {
              alert("Wrong code");
            }
          }}
        >
          Enter
        </button>
        <p className="text-xs text-gray-500">This preview is protected. Do not share publicly.</p>
      </div>
    </div>
  );
}
