import axios from '../axios';

export const getRoles = () => {
  return axios.get('/auth/roles');
};
