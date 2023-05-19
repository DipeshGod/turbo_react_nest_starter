import { rest } from 'msw';
import { roles } from './data/roles';

export const rolesHandlers = [
  rest.get('/auth/roles', (_, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(roles));
  }),
];
