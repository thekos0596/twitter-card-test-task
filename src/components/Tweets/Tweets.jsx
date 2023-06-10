import Tweet from 'components/Tweet/Tweet';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'services/usersApi';

const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <ul>
        {users.map(user => {
          return <Tweet key={user.id} user={user} />;
        })}
      </ul>
    </>
  );
};

export default Tweets;
