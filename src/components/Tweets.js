import React from "react";
import { Tweet } from "./Tweet";

export const Tweets = (props) => {
  const { tweetData } = props
  //map is the equivalent of renderTweets() in the old version
  const tweets = tweetData ? tweetData.map((tweetData, index) => {
    return <Tweet
        key={index}
        name={tweetData.name}
        handle={tweetData.handle}
        profile_image={tweetData.profile_image}
        text={tweetData.text}
        date={tweetData.date}
      />
  }) : "There is no tweet here"


  return (
    <section id="tweet-container" className="tweet-container">
      {tweets}
    </section>
  );
};
