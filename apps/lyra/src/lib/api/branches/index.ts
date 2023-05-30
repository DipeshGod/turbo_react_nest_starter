import axios from '../axios';

export const getBranches = () => {
  return axios.get('/office/branches');
};
