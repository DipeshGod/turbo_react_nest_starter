import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUsers = (page = 1, search = '') => {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['users', page, search],
    queryFn: async () =>
      await axios.get(`/users?page=${page}&search=${search}`),
  });

  return { users, isLoadingUsers };
};
