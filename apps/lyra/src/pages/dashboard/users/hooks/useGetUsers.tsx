import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUsers = (page = 1) => {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['users', page],
    queryFn: async () => await axios.get(`/users?page=${page}`),
  });

  return { users, isLoadingUsers };
};
