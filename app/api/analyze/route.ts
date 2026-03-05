export const runtime = "nodejs";
import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { z } from "zod";
import { extractTextFromPDF } from "@/lib/pdf";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import "dotenv/config";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return Response.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const text = await extractTextFromPDF(buffer);

  const schema = z.object({
    overallScore: z.number(),
    categoryScores: z.object({
      technicalSkills: z.number(),
      experience: z.number(),
      projects: z.number(),
      problemSolving: z.number(),
      structure: z.number(),
      specialization: z.number(),
    }),
    strengths: z.array(z.string()),
    weaknesses: z.array(z.string()),
    suggestions: z.array(z.string()),
  });

  const result = streamObject({
    model: google("gemini-2.5-flash"),
    schema,
    system: SYSTEM_PROMPT,
    prompt: `Analyze this CV:\n\n${text}`,
  });

  return result.toTextStreamResponse();
}
