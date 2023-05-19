import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { isDrawerOpen } from './user.atoms';

export const useGetRoles = () => {
  const [isOpen] = useAtom(isDrawerOpen);
  const { data: roles, isLoading: isLoadingRoles } = useQuery({
    queryKey: ['roles'],
    queryFn: async () => (await axios.get('/auth/roles')).data,
    enabled: isOpen,
  });

  return { roles, isLoadingRoles };
};
