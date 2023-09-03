import "./App.css";
import React, {useState} from "react";
import MakeTweets from "./MakeTweets";
import TweetList from "./TweetList";

function App() {
  //states here
  const [TweetList, setTweetList] = useState([]);

  return (
    <div className="app">
      <MakeTweets TweetList={TweetList} setTweetList={setTweetList} />
      <TweetList TweetList={TweetList} setTweetList={setTweetList} />
    </div>
  );
}

export default App;
