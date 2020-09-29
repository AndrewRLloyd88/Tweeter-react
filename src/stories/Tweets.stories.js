import React from 'react'
import { Tweets } from '../components/Tweets'

export default { title: "Tweet Container" }

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {

  const tweets = [
    {
      name: "Andrew Lloyd",
      handle: "@ARL1988",
      profile_image: "https://i.imgur.com/DVpDmdR.png",
      text: "Gott is Tot",
      date: "10 Days Ago",
    },
  
    {
      name: "Amy Mansell",
      handle: "@AitsAmy",
      profile_image: "https://i.imgur.com/DVpDmdR.png",
      text: "What do you think of hexagons?",
      date: "15 Days Ago",
    },
  
    {
      name: "Andrew Lloyd",
      handle: "@ARL1988",
      profile_image: "https://i.imgur.com/DVpDmdR.png",
      text: "Gott is Tot",
      date: "10 Days Ago",
    },
  
    {
      name: "Amy Mansell",
      handle: "@AitsAmy",
      profile_image: "https://i.imgur.com/DVpDmdR.png",
      text: "What do you think of hexagons?",
      date: "15 Days Ago",
    },
  ];

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image}
  // text={singleTweet.text} date={singleTweet.date} />

  return <Tweets tweetData={tweets} />

}