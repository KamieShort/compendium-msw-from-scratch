import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

global.fetch = fetch;

const animalsApiData = {
  data: [
    {
      animal_type: 'Bird',
      diet: 'Fruit, seeds, insects, and other small animals',
      habitat: 'Woodland and savanna',
      id: 144,
    },
  ],
};

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    (req, res, ctx) => res(ctx.json(animalsApiData))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
