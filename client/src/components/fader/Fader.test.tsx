import * as React from 'react';
import {shallow} from 'enzyme';

import {Fader} from './Fader';

describe('Fader', () => {
    it('Should match snapshot', () => {
        const fader = shallow(<Fader>Foo</Fader>);

        expect(fader).toMatchSnapshot();
    });
});