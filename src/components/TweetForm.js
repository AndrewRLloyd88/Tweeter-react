import React, { useState } from "react";

export const TweetForm = props => {
  //using object destructurisation to fetch props from addNewTweet function
  const { addNewTweet } = props


  //loop between text area and state we change we set tweetText we change set tweetText etc...
  //onChange = keyUP or keydown in jQuery
  const [tweetText, setTweetText] = useState("");

  //new variable keeping track of the reminaing length
  const tweetRemainingLength = 140 - tweetText.length

  //object containing style we want to give to our counter
  const counterStyle = {color: tweetRemainingLength >= 0 ? "black" : "red"}

  //submit form logic 
  //how can we talk to the component on top of us tweetForm is not calling app, props go down not go up
  const submitTweet = event => {
    event.preventDefault()
    //passing tweetText along to our addNewTweet function
    //send if remaining length >= 140
    if(tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
    addNewTweet(tweetText)
    //clears the form after sending tweet
    setTweetText("")
    }
  } 


  //controlled text area when it changes it gives the new value to tweetText 

    //form onSubmit triggers the submit form tweet function if event is caught
      //execute a new tweet extracted from props
      //the props come from APP.js
  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <div id="tweet-error-msg" className="tweet-error-msg"></div>
      <form onSubmit={submitTweet} method="post" id="tweet-form">
        <label htmlFor="tweet-text" className="bold">
          What are you humming about?
        </label>
        <textarea
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
          name="text"
          id="tweet-text"
          autoFocus
        ></textarea>
        <div className="flex-row space-between margin-top">
          <button className="compose-tweet" type="submit">
            Tweet
          </button>
          <output style={counterStyle} name="counter" className="counter" htmlFor="tweet-text">
            {140 - tweetText.length}
          </output>
        </div>
      </form>
    </section>
  );
};
