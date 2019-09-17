import {shallow} from 'enzyme';
import * as React from 'react';

import {Routes} from './Routes';

describe('Routes', () => {
    it('Should match snapshot', () => {
        const routes = shallow(<Routes/>);

        expect(routes).toMatchSnapshot();
    });
});