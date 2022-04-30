import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AnimalList from './AnimalList';

describe('Animal List', () => {
  it('Should render the array of animals', async () => {
    render(
      <MemoryRouter>
        <AnimalList />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    // const diet = await screen.getAllByRole('heading', {
    //   name: /diet:/i,
    // });
    expect(diet).toBeInTheDocument();

    const filter = await screen.queryAllByText('Mammal');
    userEvent.type(filter, 'Mammal');

    return waitFor(() => {
      screen.getByRole('heading', { name: /type/i });
    });
  });
});
