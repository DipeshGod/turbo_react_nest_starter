import axios from '../axios';

export const getUsers = (page: number, search: string) => {
  return axios.get(`users?page=${page}&search=${search}`);
};
