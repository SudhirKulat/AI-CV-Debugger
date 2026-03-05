export default function ResultCard({ result }: any) {
  return (
    <div className="mt-8 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Overall Score: {result?.overallScore}/100
      </h2>

      <h3 className="font-semibold">Category Scores:</h3>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(result?.categoryScores, null, 2)}
      </pre>

      <h3 className="mt-4 font-semibold">Strengths</h3>
      <ul className="list-disc pl-6">
        {result?.strengths.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Weaknesses</h3>
      <ul className="list-disc pl-6">
        {result?.weaknesses.map((w: string, i: number) => (
          <li key={i}>{w}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Suggestions</h3>
      <ul className="list-disc pl-6">
        {result?.suggestions.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
