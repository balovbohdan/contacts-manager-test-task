import {shallow} from 'enzyme';
import * as React from 'react';

import {Apollo} from './Apollo';

describe('Apollo connector', () => {
    it('Should match snapshot', () => {
        const apollo = shallow(<Apollo>Foo</Apollo>);

        expect(apollo).toMatchSnapshot();
    });
});