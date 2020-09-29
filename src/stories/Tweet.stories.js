import React from 'react'
import { Tweet } from '../components/Tweet'

export default { title: "Singular tweet" }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {

  const singleTweet = {
    name: "Andrew Lloyd",
    handle: "@ARL1988",
    profile_image: "https://i.imgur.com/DVpDmdR.png",
    text: "Gott is Tot",
    date: "10 Days Ago"
  }

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image}
  // text={singleTweet.text} date={singleTweet.date} />

  return <Tweet {...singleTweet} />

}