import Button from 'components/Button/Button';

const Tweet = ({ user }) => {
  return (
    <li key={user.id}>
      <img src={user.avatar} alt="" />
      <span>{user.name}</span>
      <span> Tweets {user.tweets}</span>
      <span> Followers {user.followers}</span>
      <Button user={user} />
    </li>
  );
};
export default Tweet;
