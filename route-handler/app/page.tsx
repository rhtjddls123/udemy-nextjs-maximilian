import FeedbackForm from "@/components/feedback-form";
import LoadFeedback from "@/components/load-feedback";

export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <FeedbackForm />
      <hr />
      <LoadFeedback />
    </div>
  );
}
