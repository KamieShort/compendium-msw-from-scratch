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

    // await screen.findByText('Habitat: ');

    // container.querySelector('#root > div');

    // userEvent.selectOptions(screen.findByRole('combobox'));
    // expect(dropDown).toBeInTheDocument();

    // const habitat = screen.getByRole('heading', { name: /habitat: /i });
    // expect(habitat).toBeInTheDocument();

    // const list = screen.getByRole('list');
    // expect(list.children.length).toEqual(animals.length);
  });
});
