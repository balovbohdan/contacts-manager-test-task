import * as React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

describe('Home route', () => {
    it('Should match snapshot', () => {
        const home = shallow(<Home/>);

        expect(home).toMatchSnapshot();
    });
});