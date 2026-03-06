"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreGauge({ score }: { score: number }) {
  return (
    <div className="w-40">
      <CircularProgressbar
        value={score}
        text={`${score}%`}
      />
      <p className="text-center mt-2 font-semibold">
        Resume Score
      </p>
    </div>
  );
}