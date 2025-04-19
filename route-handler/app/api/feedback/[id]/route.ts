import { NextRequest, NextResponse } from "next/server";
import { buildFeedbackPath, extractFeedback } from "../route";
import { FeedbackType } from "@/types/type";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const feedbackId = (await params).id;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath) as FeedbackType[];
  const selectedFeedback = feedbackData.find((feedback) => feedback.id === feedbackId);

  return NextResponse.json({ feedback: selectedFeedback }, { status: 200 });
}
