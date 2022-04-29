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

    const type = await screen.findByText('Type:');
    expect(type).toBeInTheDocument();
  });
});
