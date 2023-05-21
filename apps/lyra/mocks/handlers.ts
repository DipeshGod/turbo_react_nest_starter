import { rolesHandlers } from './rolesHandlers';
import { branchesHandlers } from './branchesHandlers';
import { usersHandlers } from './usersHandlers';

export const handlers = [
  ...rolesHandlers,
  ...branchesHandlers,
  ...usersHandlers,
];
