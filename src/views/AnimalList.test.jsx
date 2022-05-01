import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AnimalList from './AnimalList';

describe('AnimalList', () => {
  it('Should render a list of animals that are filterable', async () => {
    render(
      <MemoryRouter>
        <AnimalList />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    const animalName = await screen.findByText('Alpaca');
    expect(animalName).toBeInTheDocument();

    screen.getByRole('combobox');

    screen.getAllByText(/habitat: tropical rainforest/i);

    screen.getAllByRole('list');
  });
});
