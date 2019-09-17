import {shallow} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';

import {store} from '@storehouse';

import {Content} from './Content';

describe('Root App content', () => {
    it('Should match snapshot', () => {
        const content = shallow(
            <Provider store={store}>
                <Content/>
            </Provider>
        );

        expect(content).toMatchSnapshot();
    });
});