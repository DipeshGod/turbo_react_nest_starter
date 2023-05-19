import { rest } from 'msw';

import { rolesHandlers } from './rolesHandlers';
import { branchesHandlers } from './branchesHandlers';

export const handlers = [...rolesHandlers, ...branchesHandlers];
