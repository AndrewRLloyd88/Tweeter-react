import React from "react";
import './individual-tweet.css'

export const Tweet = props => {
  const {name, handle, text, profile_image, date} = props

  return (

        <>
    {name && handle && text && profile_image && date &&
      (
    <article className="indiv-tweet">
        <header className="padding-20">
        <img className="avatar" src={profile_image} />
        <div>{name}</div>
        <div className="handle">{handle}</div>
      </header>
      <main>
        {text}
      </main>
      <footer className="padding-20">
        <div className="date-actions">
          {date}
          <div className="tweet-icons">
            <i className="fas fa-flag"></i>
            <i className="fas fa-retweet"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </footer>
    </article>
      )
      }
      </>



    
  
  );
};
