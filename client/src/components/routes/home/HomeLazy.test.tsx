import * as React from 'react';
import {shallow} from 'enzyme';

import HomeLazy from './HomeLazy';

describe('Home route, lazy version', () => {
    it('Should match snapshot', () => {
        const home = shallow(<HomeLazy/>);

        expect(home).toMatchSnapshot();
    });
});