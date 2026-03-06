"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";


export default function ScoreBars({ scores }: any) {
    const data = [
    { subject: "Skills", score: scores.technicalSkills },
    { subject: "Experience", score: scores.experience },
    { subject: "Projects", score: scores.projects },
    { subject: "Problem Solving", score: scores.problemSolving },
    { subject: "Structure", score: scores.structure },
  ];
  return (
    <div className="w-full h-[350px] bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Score Breakdown</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={120} />

          <Tooltip />

          <Bar
            dataKey="score"
            fill="#3b82f6"
            radius={[0, 10, 10, 0]}
            barSize={25}
          >
            <LabelList dataKey="score" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}