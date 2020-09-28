import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'


const tweetsData = [
  {
    name: "Andrew Lloyd",
    handle: "@ARL1988",
    profile_image: "https://i.imgur.com/DVpDmdR.png",
    text: "Gott is Tot",
    date: "10 Days Ago"
  },

  {
    name: "Amy Mansell",
    handle: "@AitsAmy",
    profile_image: "https://i.imgur.com/DVpDmdR.png",
    text: "What do you think of hexagons?",
    date: "15 Days Ago"
  },

  {
    name: "Andrew Lloyd",
    handle: "@ARL1988",
    profile_image: "https://i.imgur.com/DVpDmdR.png",
    text: "Gott is Tot",
    date: "10 Days Ago"
  },

  {
    name: "Amy Mansell",
    handle: "@AitsAmy",
    profile_image: "https://i.imgur.com/DVpDmdR.png",
    text: "What do you think of hexagons?",
    date: "15 Days Ago"
  }

]


function App() {
 //map is the equivalent of renderTweets() in the old version
  const tweets = tweetsData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date}/>
  })

  return (
    
    <div className="App">
    <Navigation />
     <Profile />
    <main className="container">
     <TweetForm />
     <section id="tweet-container" className="tweet-container">
     {tweets}
     </section>
     </main>
    </div>
    
    
  );
}

export default App;
