import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StarWarsCharacters from './StarWarsCharacters';

const component = <StarWarsCharacters/>;

test('StarWarsCharacters component renders', () => {
    const { getByTestId} = render(component);

    getByTestId(/starwarschar-component/i);
    expect(getByTestId(/starwarschar-component/i)).not.toHaveTextContent(/luke skywalker/i);
   
});


test('Buttons rendered in component', () => {
    const {queryAllByRole, getByText} = render(component);
    getByText(/previous/i);
    getByText(/next/i);
})