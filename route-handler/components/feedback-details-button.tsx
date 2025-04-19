"use client";

import { FeedbackType } from "@/types/type";
import { useState } from "react";

interface FeedbackDetailsButtonProps {
  id: string;
}

const FeedbackDetailsButton = ({ id }: FeedbackDetailsButtonProps) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackType>();

  async function loadFeedbackHandler(id: string) {
    const res = await fetch(`api/feedback/${id}`);
    const resData = (await res.json()) as { feedback: FeedbackType | undefined };
    setFeedbackData(resData.feedback);
  }

  return (
    <>
      <button onClick={loadFeedbackHandler.bind(null, id)}>Show Details</button>
      {feedbackData && <p>{feedbackData.email}</p>}
    </>
  );
};

export default FeedbackDetailsButton;
