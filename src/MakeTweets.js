import React from "react";
import {useState} from "react";

const MakeTweets = ({TweetList, setTweetList}) => {
  //handler functions here
  let newTweet = "";
  const textHandler = (e) => {
    newTweet = e.target.value;
  };

  const submitHandler = (e) => {
    setTweetList([...TweetList, newTweet]);
  };

  // main component structure

  return (
    <div className="makeTweet">
      <form action="">
        <input onChange={textHandler} type="text" />
        <button onClick={submitHandler}>Tweet</button>
      </form>
    </div>
  );
};

export default MakeTweets;
