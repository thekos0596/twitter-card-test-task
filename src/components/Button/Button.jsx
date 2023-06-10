import axios from 'axios';
import React, { useState } from 'react';
import { fetchFollowersCount, updateFollowers } from 'services/usersApi';

const Button = ({ user }) => {
  const [btnText, setBtnText] = useState('Follow');
  const [followersCount, setFollowersCount] = useState(0);
  const [isSubscribed, setSubscribed] = useState(false);

  const handleClick = () => {
    const newFollowersCount = isSubscribed
      ? followersCount - 1
      : followersCount + 1;
    if (btnText === 'Follow') {
      setBtnText('Following');
    } else {
      setBtnText('Follow');
    }

    // fetchFollowersCount(user).then(res => {
    //   setFollowersCount(res.user.followers);
    // });
    // console.log(followersCount);

    updateFollowers(user).then(res => {
      console.log(res.followers);
      setSubscribed(!isSubscribed);
      setFollowersCount(newFollowersCount);
    });
    console.log(followersCount);
  };
  return <button onClick={handleClick}>{btnText}</button>;
};

export default Button;
