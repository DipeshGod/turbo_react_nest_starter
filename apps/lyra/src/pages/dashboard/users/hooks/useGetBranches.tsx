import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { isDrawerOpen } from '../user.atoms';
import { getBranches } from '@api/branches';

export const useGetBranches = () => {
  const [isOpen] = useAtom(isDrawerOpen);
  const { data: branches, isLoading: isLoadingBranches } = useQuery({
    queryKey: ['branches'],
    queryFn: () => getBranches(),
    enabled: isOpen,
  });

  return { branches, isLoadingBranches };
};
