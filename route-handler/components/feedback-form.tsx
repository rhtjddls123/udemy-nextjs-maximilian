"use client";

import { FormEvent, useRef } from "react";

const FeedbackForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        text: feedbackRef.current?.value
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea id="feedback" name="feedback" rows={5} ref={feedbackRef} />
      </div>
      <button>Send Feedback</button>
    </form>
  );
};

export default FeedbackForm;
