import React, {useState} from 'react';
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'


const initialTweetData = [
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
  const [tweetData, setTweetData] = useState(initialTweetData)


 //map is the equivalent of renderTweets() in the old version
  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date}/>
  })


  //prepends a new tweet
  const addNewTweet = text => {
    const newTweet = {
      name: "Amy Mansell",
      handle: "@AitsAmy",
      profile_image: "https://i.imgur.com/DVpDmdR.png",
      text,
      date: "5 Days Ago"
    }

    //prepends the newTweet to the array of tweetData equiv of prepend jQuery
    //this is how the useState hook work
    setTweetData([newTweet, ...tweetData])
  }

//we need to add a controlled form
  return (
    
    <div className="App" >
    <Navigation />
     <Profile />
    <main className="container">
    //giving tweetform access as a prop to new tweet
     <TweetForm addNewTweet={addNewTweet} />
     <section id="tweet-container" className="tweet-container">
     {tweets}
     </section>
     </main>
    </div>
    
    
  );
}

export default App;
