import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AnimalList from './AnimalList';
import userEvent from '@testing-library/user-event';

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

    screen.getAllByText(/habitat: tropical rainforest/i);

    // screen.getByRole('combobox');

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      await screen.findByRole('option', { name: 'Mammal' })
    );
    expect(screen.getByRole('option', { name: 'Mammal' }).selected).toBe(true);

    const mammal = await screen.findByText('Mammal');
    expect(mammal).toBeInTheDocument();

    const userSelected = await screen.findByText('Greater Bushbaby');
    expect(userSelected).toBeInTheDocument();

    screen.getAllByRole('list');
  });
});
