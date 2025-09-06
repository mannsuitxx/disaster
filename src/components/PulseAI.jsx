import React, { useState } from "react";

const faqs = {
  "earthquake": "During an earthquake, Drop, Cover, and Hold On. Stay away from windows.",
  "flood": "Move to higher ground immediately. Avoid walking or driving through floodwaters.",
  "fire": "Use stairs, not elevators. Stay low under smoke. Know exit routes.",
  "default": "Stay calm, follow safety protocols, and listen to authorities."
};

function PulseAI({ onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "ai", text: "Hi, I'm Pulse AI. Ask me about disasters!" }]);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }]);
    let key = Object.keys(faqs).find(k => input.toLowerCase().includes(k));
    let reply = faqs[key] || faqs.default;
    setMessages(m => [...m, { from: "ai", text: reply }]);
    setInput("");
  };

  return (
    <div className="fixed top-16 right-4 w-80 bg-white border rounded shadow-lg p-3 text-black z-50">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h4 className="font-bold">Pulse AI</h4>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="h-64 overflow-y-auto space-y-2 mb-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "ai" ? "text-blue-600" : "text-gray-800"}>
            <b>{m.from}:</b> {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-1 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-2 rounded">Send</button>
      </div>
    </div>
  );
}

export default PulseAI;
