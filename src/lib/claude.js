// These helpers call a small backend proxy (see /server.js) rather than
// the Anthropic API directly, because an API key can never be safely
// embedded in client-side code. Point PROXY_URL at wherever you deploy
// server.js (defaults to same-origin /api/* for local dev).

import { CHATBOT_SYSTEM_PROMPT, ASSESSMENT_SYSTEM_PROMPT } from "./constants.js";

const PROXY_URL = import.meta.env.VITE_API_PROXY_URL || "";

async function callProxy(system, messages) {
  const response = await fetch(`${PROXY_URL}/api/claude`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ system, messages }),
  });
  if (!response.ok) throw new Error(`Proxy error: ${response.status}`);
  const data = await response.json();
  const text = (data.content || [])
    .map((b) => (b.type === "text" ? b.text : ""))
    .filter(Boolean)
    .join("\n");
  return text;
}

export async function chatWithAssistant(messages) {
  return callProxy(CHATBOT_SYSTEM_PROMPT, messages);
}

export async function generateReadinessScore(answers) {
  const prompt = `Business size: ${answers.size}. MFA usage: ${answers.mfa}. Phishing training history: ${answers.training}. AI tool usage: ${answers.ai}.`;
  const text = await callProxy(ASSESSMENT_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}