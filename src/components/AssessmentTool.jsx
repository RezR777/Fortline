import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { QUIZ, TOKENS } from "../lib/constants.js";
import { generateReadinessScore } from "../lib/claude.js";
import ScoreRing from "./ScoreRing.jsx";

export default function AssessmentTool() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  const allAnswered = QUIZ.every((q) => answers[q.key]);

  async function runAssessment() {
    setLoading(true);
    setError(false);
    setResult(null);
    try {
      const json = await generateReadinessScore(answers);
      setResult(json);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section wrap" id="assessment">
      <div className="section-head">
        <div className="kicker">AI-powered</div>
        <h2 className="section-title">Get your Security & AI Readiness Score</h2>
      </div>
      <div className="quiz-card">
        {QUIZ.map((q) => (
          <div className="quiz-q" key={q.key}>
            <div className="quiz-q-text">{q.q}</div>
            <div className="quiz-options">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  className={"opt-btn" + (answers[q.key] === opt ? " active" : "")}
                  onClick={() => setAnswers({ ...answers, [q.key]: opt })}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          className="btn-amber"
          disabled={!allAnswered || loading}
          onClick={runAssessment}
          style={{ opacity: !allAnswered ? 0.5 : 1 }}
        >
          {loading ? "Scoring..." : "Generate my score"}
        </button>

        {error && (
          <p style={{ color: TOKENS.red, fontSize: 13, marginTop: 12 }}>
            Something went wrong generating your score. Please try again.
          </p>
        )}

        {result && (
          <div className="result-wrap">
            <ScoreRing score={result.score} />
            <div>
              <span className={"risk-badge risk-" + result.riskLevel}>{result.riskLevel} risk</span>
              <p style={{ margin: "0 0 10px", fontSize: 14, color: TOKENS.paper }}>{result.summary}</p>
              <ul className="rec-list">
                {result.recommendations.map((r, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} color={TOKENS.teal} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
