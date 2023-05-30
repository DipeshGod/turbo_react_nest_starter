import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@api/users';

export const useGetUsers = (page = 1, search = '') => {
  const { data: users } = useQuery({
    queryKey: ['users', page, search],
    queryFn: () => getUsers(page, search),
    suspense: true,
  });

  return { users };
};
