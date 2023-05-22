import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { isDrawerOpen } from '../user.atoms';

export const useGetBranches = () => {
  const [isOpen] = useAtom(isDrawerOpen);
  const { data: branches, isLoading: isLoadingBranches } = useQuery({
    queryKey: ['branches'],
    queryFn: async () => (await axios.get('/office/branches')).data,
    enabled: isOpen,
    suspense: true,
  });

  return { branches, isLoadingBranches };
};
