import { rest } from 'msw';
import { contacts } from './data/contacts';

export const contactsHandlers = [
  rest.get('/contacts', (req, res, ctx) => {
    const url = req.url.toString();
    const params = new URLSearchParams(url.split('?')[1]);
    const page = parseInt(params.get('page') ?? '1', 10);
    const perPage = parseInt(params.get('perPage') ?? '10', 10);
    const search = params.get('search') ?? '';

    // Apply search filter
    const filteredContacts = contacts.filter((contact) =>
      contact.first_name.toLowerCase().includes(search.toLowerCase())
    );

    // Apply pagination
    const totalContacts = filteredContacts.length;
    const totalPages = Math.ceil(totalContacts / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedContacts = filteredContacts.slice(startIndex, endIndex);

    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        paginatedContacts,
        totalPages,
        totalContacts,
      })
    );
  }),
];
