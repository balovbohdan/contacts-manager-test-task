import {shallow} from 'enzyme';
import * as React from 'react';

import {LeftBar} from './LeftBar';

describe('LeftBar of Header', () => {
    it('Should match snapshot', () => {
        const bar = shallow(<LeftBar/>);

        expect(bar).toMatchSnapshot();
    });
});