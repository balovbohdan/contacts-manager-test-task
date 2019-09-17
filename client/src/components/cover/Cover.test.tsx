import {shallow} from 'enzyme';
import * as React from 'react';

import {Cover} from './Cover';

describe('Main page Cover', () => {
    it('Should match snapshot', () => {
        const cover = shallow(<Cover/>);

        expect(cover).toMatchSnapshot();
    });
});