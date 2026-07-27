# Fortline IT & Security — website

A Vite + React site for an IT/cybersecurity consulting business, with two live AI
features (an assistant chatbot and a security & AI readiness scoring tool) powered
by the Claude API.

## Project structure

```
fortline-site/
├── index.html
├── server.js              # backend proxy that holds the Anthropic API key
├── .env.example
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           # design tokens + all component styles
    ├── lib/
    │   ├── constants.js    # colors, service tiers, quiz questions, system prompts
    │   └── claude.js       # fetch helpers that call the proxy
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── NetworkSignature.jsx   # animated SVG in the hero
        ├── Services.jsx
        ├── AssessmentTool.jsx     # AI readiness quiz + score
        ├── ScoreRing.jsx
        ├── About.jsx
        ├── Footer.jsx
        └── ChatWidget.jsx         # floating AI assistant
```

## Why there's a `server.js`

The Anthropic API key can't be safely used from browser code — anyone could open
dev tools and steal it. `server.js` is a minimal Express proxy: the browser talks
to it, and it talks to Anthropic using a key that stays server-side only.

## Running locally

```bash
npm install
npm install express cors dotenv   # for the proxy server
cp .env.example .env               # then add your real ANTHROPIC_API_KEY
node server.js                     # starts the proxy on port 3001
```

In a second terminal:

```bash
npm run dev                        # starts the Vite dev server
```

By default the frontend calls `/api/claude` on the same origin. If you run the
proxy on a different host/port (e.g. in production), set `VITE_API_PROXY_URL` in
a `.env` file read by Vite, pointing at your proxy's base URL.

## Deploying

- **Frontend**: `npm run build` produces a static `dist/` folder deployable to
  Vercel, Netlify, GitHub Pages, etc.
- **Backend**: `server.js` needs a Node host (Railway, Render, Fly.io, a small VPS).
  Set `ANTHROPIC_API_KEY` as an environment variable there — never commit it.

## Things to personalize before going live

- Business name ("Fortline") — swap throughout `src/` if you want something else
- Email address and LinkedIn link in `src/components/Footer.jsx`
- Pricing in `src/lib/constants.js` if your rates change
- The chatbot's knowledge in `CHATBOT_SYSTEM_PROMPT` (same file) if services change
