import { rest } from 'msw';

export const handlers = [
  rest.get('/auth/roles', (req, res, ctx) => {
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
];
