import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, Loader2, Network } from "lucide-react";
import { TOKENS } from "../lib/constants.js";
import { chatWithAssistant } from "../lib/claude.js";

export default function ChatWidget({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi — I'm the Fortline AI assistant. Ask me about services, pricing, or what an assessment looks like.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const reply = await chatWithAssistant(next);
      setMessages([...next, { role: "assistant", content: reply || "Sorry, I didn't catch that — try again?" }]);
    } catch (e) {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong reaching the assistant. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button className="chat-fab" onClick={onOpen} aria-label="Open Fortline AI chat">
        <MessageCircle color="#1A1206" size={24} />
      </button>
    );
  }

  return (
    <div className="chat-panel">
      <div className="chat-head">
        <div className="chat-head-title">
          <Network size={15} color={TOKENS.teal} />
          Fortline AI Assistant
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }} aria-label="Close chat">
          <X size={18} color={TOKENS.fog} />
        </button>
      </div>
      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={"msg " + m.role}>
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="msg assistant">
            <Loader2 size={14} className="spin" />
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          placeholder="Ask about pricing, services..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="send-btn" onClick={send} aria-label="Send message">
          <Send size={16} color="#1A1206" />
        </button>
      </div>
    </div>
  );
}
