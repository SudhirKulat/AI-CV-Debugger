"use client";

type ScoreItem = {
  name: string;
  score: number;
};

const getColor = (score: number) => {
    console.log('object',score, typeof score)
  if (score >= 30) return "bg-green-500";
  if (score >= 20) return "bg-blue-500";
  if (score >= 10) return "bg-yellow-500";
  return "bg-red-500";
};

export default function ScoreProgress({
  scores,
}: {
  scores: ScoreItem[];
}) {
    console.log('scores', scores)
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-6 text-black-600">Score Breakdown</h2>

      <div className="space-y-5">
        {scores.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-black-400">{item.name}</span>
              <span className="font-medium text-black-400">{item.score}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${getColor(item.score)} h-3 rounded-full transition-all`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
