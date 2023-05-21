import { rest } from 'msw';
import { users } from './data/users';

export const usersHandlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(users));
  }),
];
