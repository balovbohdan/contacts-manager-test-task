import * as React from 'react';
import {shallow} from 'enzyme';

import {Header} from './Header';

describe('Header', () => {
    it('Should match snapshot', () => {
        const toggleRegWindow = jest.fn();
        const toggleLoginWindow = jest.fn();

        const header = shallow(
            <Header
                toggleRegWindow={toggleRegWindow}
                toggleLoginWindow={toggleLoginWindow}/>
        );

        expect(header).toMatchSnapshot();
    });
});