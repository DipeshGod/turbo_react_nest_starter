import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { isDrawerOpen } from '../user.atoms';
import { getRoles } from '@api/roles';

export const useGetRoles = () => {
  const [isOpen] = useAtom(isDrawerOpen);
  const { data: roles, isLoading: isLoadingRoles } = useQuery({
    queryKey: ['roles'],
    queryFn: async () => getRoles(),
    enabled: isOpen,
  });

  return { roles, isLoadingRoles };
};
