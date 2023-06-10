import axios from 'axios';

axios.defaults.baseURL = 'https://64834d52f2e76ae1b95c475d.mockapi.io/';

export const getUsers = async () => {
  const data = await axios.get('users');
  return data;
};

// export const fetchFollowersCount = async ({ user }) => {
//   const { data } = await axios.get(`users/${user.id}`);
//   console.log(data);
//   return data;
// };

export const updateFollowers = async ({ user }) => {
  const { id, followers } = user;
  const { data } = await axios.put(`users/${id}/${followers}`);
  console.log(data);
  return data;
};
