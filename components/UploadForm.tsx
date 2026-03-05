"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";

export default function UploadForm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

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
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? "Analyzing..." : "Lets Analyze!"}
          </button>
        </div>
      </form>

      {result && <ResultCard result={result} />}
    </>
  );
}
