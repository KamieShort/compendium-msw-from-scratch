import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

global.fetch = fetch;

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    (req, res, ctx) => res(ctx.json())
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Animal List', () => {
  it('Should render the array of animals', async () => {
    render(
      <MemoryRouter>
        <AnimalList />
      </MemoryRouter>
    );

    const type = await screen.findByText('Type:');
    expect(type).toBeInTheDocument();
  });
});
