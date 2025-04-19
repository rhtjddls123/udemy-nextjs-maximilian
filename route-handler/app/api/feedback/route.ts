import { FeedbackRequestType, FeedbackType } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath: string) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString("utf-8"));
  return data;
}

export function GET() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return NextResponse.json({ feedback: data }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as FeedbackRequestType;
  const newFeedback: FeedbackType = {
    id: new Date().toISOString(),
    email: body.email,
    text: body.text
  };

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  data.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(data));

  return NextResponse.json({ message: "POST 요청 성공!", feedback: newFeedback }, { status: 201 });
}
