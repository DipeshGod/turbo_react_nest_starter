import { atom } from 'jotai';

const isDrawerOpen = atom(false);
const setIsDrawerOpen = atom(null, (_, set, update: boolean) => {
  set(isDrawerOpen, update);
});

export { isDrawerOpen, setIsDrawerOpen };
