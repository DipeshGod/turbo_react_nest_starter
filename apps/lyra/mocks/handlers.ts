import { rest } from 'msw';

export const handlers = [
  rest.get('/auth/roles', (_, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Admin',
        },
        {
          id: '2',
          name: 'Manager',
        },
        {
          id: '3',
          name: 'Admission Officer',
        },
        {
          id: '4',
          name: 'Counsellor',
        },
      ])
    );
  }),
  rest.get('/office/branches', (_, res, ctx) => {
    return res(
      ctx.delay(1200),
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Kathmandu',
        },
        {
          id: '2',
          name: 'Biratnagar',
        },
        {
          id: '3',
          name: 'Maitidevi',
        },
        {
          id: '4',
          name: 'Maharajgunj',
        },
      ])
    );
  }),
];
