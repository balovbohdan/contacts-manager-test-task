import {shallow} from 'enzyme';
import * as React from 'react';

import {Redux} from './Redux';

describe('Redux connector', () => {
    it('Should match snapshot', () => {
        const redux = shallow(<Redux>Foo</Redux>);

        expect(redux).toMatchSnapshot();
    });
});