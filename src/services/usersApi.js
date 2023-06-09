import axios from 'axios';

axios.defaults.baseURL = 'https://64834d52f2e76ae1b95c475d.mockapi.io';

export const getUsers = async () => {
  const res = await axios.get('users');

  return res.data;
};
