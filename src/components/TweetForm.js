import React from "react";

export const TweetForm = () => {
  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <div id="tweet-error-msg" className="tweet-error-msg"></div>
      <form id="tweet-form">
        <label htmlFor="tweet-text" className="bold">
          What are you humming about?
        </label>
        <textarea name="text" id="tweet-text" autoFocus></textarea>
        <div className="flex-row space-between margin-top">
          <button className="compose-tweet" type="submit">
            Tweet
          </button>
          <output name="counter" className="counter" htmlFor="tweet-text">
            140
          </output>
        </div>
      </form>
    </section>
  );
};
