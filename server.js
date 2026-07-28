// Minimal proxy server for the Claude API.
// Run with: node server.js  (requires: npm install express cors dotenv)
// Set ANTHROPIC_API_KEY in a .env file (see .env.example).

import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/claude", async (req, res) => {
  const { system, messages } = req.body;
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system,
        messages,
      }),
    });
    const data = await response.json();
    console.log("Anthropic response:", JSON.stringify(data, null, 2));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to reach Claude API" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
