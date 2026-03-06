"use client";

import { useState } from "react";
import InsightCard from "./InsightCard";
import ScoreGauge from "./ScoreGauge";
import ScoreProgress from "./ScoreProgress";

export default function UploadForm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const formData = new FormData();
    formData.append("file", e.target.file.files[0]);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            name="file"
            accept="application/pdf"
            required
            style={{
              border: "1px solid grey",
              height: "3rem",
              margin: "1rem",
              borderRadius: "4px",
            }}
          />
          {loading ? (
            <div className="text-center mt-6 animate-pulse">
              🤖 AI analyzing your resume...
            </div>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              Lets Analyze!
            </button>
          )}
        </div>
      </form>
      {result && (
        <>
          <div className="flex flex-col md:flex-row items-center justify-around mt-6 gap-10">
            <ScoreGauge score={result.overallScore} />
            <ScoreProgress
              scores={[
                {
                  name: "Skills",
                  score: result.categoryScores.technicalSkills,
                },
                { name: "Experience", score: result.categoryScores.experience },
                { name: "Projects", score: result.categoryScores.projects },
                {
                  name: "Problem Solving",
                  score: result.categoryScores.problemSolving,
                },
                { name: "Structure", score: result.categoryScores.structure },
                {
                  name: "Structure",
                  score: result.categoryScores.specialization,
                },
              ]}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 h-100">
            <InsightCard
              title="Strengths"
              items={result.strengths}
              color="green"
            />
            <InsightCard
              title="Weaknesses"
              items={result.weaknesses}
              color="green"
            />
            <InsightCard
              title="Suggestions"
              items={result.suggestions}
              color="green"
            />
          </div>
        </>
      )}
    </>
  );
}
