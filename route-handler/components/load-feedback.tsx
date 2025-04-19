"use client";

import { FeedbackType } from "@/types/type";
import { useState } from "react";

const LoadFeedback = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackType[]>([]);

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data: { feedback: FeedbackType[] }) => setFeedbackItems(data.feedback));
  }

  return (
    <>
      <button onClick={loadFeedbackHandler}>Load Feedback</button>;
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default LoadFeedback;
