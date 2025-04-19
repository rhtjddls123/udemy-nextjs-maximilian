import { FeedbackType } from "@/types/type";
import { buildFeedbackPath, extractFeedback } from "../api/feedback/route";
import FeedbackDetailsButton from "@/components/feedback-details-button";

const FeedbackPage = async () => {
  const filePath = buildFeedbackPath();
  const feedbackItems = extractFeedback(filePath) as FeedbackType[];

  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>
          {item.text}
          <FeedbackDetailsButton id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default FeedbackPage;
