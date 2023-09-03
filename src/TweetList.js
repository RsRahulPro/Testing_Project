import React from "react";
import {useState} from "react";
import Tweet from "./Tweet";

const TweetList = ({TweetList, setTweetList}) => {
  return (
    <div className="tweets">
      {TweetList.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
