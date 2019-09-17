import * as React from 'react';
import {shallow} from 'enzyme';

import {PagePreloader} from './PagePreloader';

describe('PagePreloader', () => {
    it('Should match snapshot', () => {
        const preloader = shallow(<PagePreloader/>);

        expect(preloader).toMatchSnapshot();
    });
});