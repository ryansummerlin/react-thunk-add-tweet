import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweetAsync } from './store/tweet';

const CreateTweet = () => {
    const [tweet, setTweet] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTweet(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tweet.length > 0) {
            dispatch(postTweetAsync(tweet));
            setTweet('');
        } else {
           window.alert('Tweet cannot be blank!');
        }
    }


    return (
      <div>
        <input
            onChange={handleChange}
            value={tweet}
        />
        <button
            onClick={handleSubmit}
        >
            Post Tweet
        </button>
      </div>
    );
  };

  export default CreateTweet;
