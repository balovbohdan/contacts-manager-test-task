import {shallow} from 'enzyme';
import * as React from 'react';

import {App} from './App';

describe('Root App', () => {
    it('Should match snapshot', () => {
        const app = shallow(<App/>);

        expect(app).toMatchSnapshot();
    });
});