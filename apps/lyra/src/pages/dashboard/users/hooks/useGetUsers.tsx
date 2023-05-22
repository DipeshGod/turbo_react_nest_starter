import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUsers = () => {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['users'],
    queryFn: async () => (await axios.get('/users')).data,
    suspense: true,
  });

  return { users, isLoadingUsers };
};
