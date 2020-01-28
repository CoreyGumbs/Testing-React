import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';


test('App component renders', () => {
    const { getByTestId} = render(<App />);
   
    expect(queryByTestId(document.documentElement, 'app-component')).toBeInTheDocument();
    expect(getByTestId(/logo-img/i)).toHaveAttribute('alt', 'logo');

});

test('Logo image in App component', () =>{

    const { getByTestId } = render(<App />);
    const logoSRC = "https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png";
    expect(getByTestId(/logo-img/i)).toHaveAttribute('src', logoSRC);
});