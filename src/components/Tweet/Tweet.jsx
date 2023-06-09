import React from 'react';

const Tweet = ({ users }) => {
  return (
    <>
      {users.map(({ id, name, tweets, followers, avatar }) => (
        <li key={id}>
          <img src={avatar} alt="" />
          <span>{name}</span>
          <span>{tweets} Tweets</span>
          <span>{followers} Followers</span>
          <button>Follow</button>
        </li>
      ))}
    </>
  );
};
export default Tweet;
