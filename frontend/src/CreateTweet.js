import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets } from './store/tweet';

const CreateTweet = () => {
    const [tweet, setTweet] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTweet(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tweet.length > 0) {
            // this should post the tweet
        }
    }


    return (
      <div>
        <input
            onChange={handleChange}
        />
        <button
            onSubmit={handleSubmit}
        >
            Post Tweet
        </button>
      </div>
    );
  };

  export default CreateTweet;
