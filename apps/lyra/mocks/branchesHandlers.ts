import { rest } from 'msw';
import { branches } from './data/branches';

export const branchesHandlers = [
  rest.get('/office/branches', (_, res, ctx) => {
    return res(ctx.delay(1200), ctx.status(200), ctx.json(branches));
  }),
];
