// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const POST = 'tweet/postTweet';

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

// regular action creator
const postTweet = (tweet) => {
  return {
    type: POST,
    tweet
  }
}

// thunk action creator
export const postTweetAsync = (tweet) => async (dispatch) => {
  const response = await fetch('/api/tweets/post', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dispatch(postTweet(tweet)))
  })

  if (response.ok) {
    console.log('tweet posted successfully');
  } else {
    console.log("Uh oh, something went wrong");
  }
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case POST: {
      const newState = Object.assign({}, state);
      const newId = Object.keys(newState).length + 1;
      newState[newId] = { id: newId, message: action.tweet, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      return newState;
    }
    default:
      return state;
  }
};

export default tweetsReducer;
