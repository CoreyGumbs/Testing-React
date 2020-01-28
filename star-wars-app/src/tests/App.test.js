import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';


test('App Component Renders', () => {
    const { getByTestId} = render(<App />);
    expect(getByTestId(/app-component/i)).toHaveAttribute('data-testid', 'app-component');
    expect(getByTestId(/logo-img/i)).toHaveAttribute('alt', 'logo');

});