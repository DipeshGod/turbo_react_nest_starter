import { rest } from 'msw';
import { users } from './data/users';

export const usersHandlers = [
  rest.get('/users', (req, res, ctx) => {
    const url = req.url.toString();
    const params = new URLSearchParams(url.split('?')[1]);
    const page = parseInt(params.get('page') ?? '1', 10);
    const perPage = parseInt(params.get('perPage') ?? '10', 10);
    const search = params.get('search') ?? '';

    // Apply search filter
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    // Apply pagination
    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        paginatedUsers,
        totalPages,
        totalUsers,
      })
    );
  }),
];
