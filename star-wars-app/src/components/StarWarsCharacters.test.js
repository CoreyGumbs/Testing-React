import React from 'react';
import { render } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';


test('Renders StarWarsCharacters Component', () => {
     //ARRANGE//ACT//ASSERT
    const {getByText} = render(<StarWarsCharacters/>);


});
