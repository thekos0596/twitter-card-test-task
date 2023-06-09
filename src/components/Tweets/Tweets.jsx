import Tweet from 'components/Tweet/Tweet';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'services/usersApi';

const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <>
      <ul>
        <Tweet users={users} />
      </ul>
    </>
  );
};

export default Tweets;
