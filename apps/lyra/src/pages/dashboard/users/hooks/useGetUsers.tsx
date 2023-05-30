import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUsers = (page = 1, search = '') => {
  const { data: users } = useQuery({
    queryKey: ['users', page, search],
    queryFn: async () =>
      await axios.get(`/users?page=${page}&search=${search}`),
    suspense: true,
  });

  return { users };
};
