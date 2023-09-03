import React from "react";
import {useState} from "react";
const Tweet = ({tweet}) => {
  return (
    <div className="tweet">
      <h3>{tweet}</h3>
      <button>Like</button> <button>Share</button>
    </div>
  );
};

export default Tweet;
