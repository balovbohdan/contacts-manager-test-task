import * as React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import {store} from '@storehouse';

import {Windows} from './Windows';

describe('Root windows', () => {
    it('Should match snapshot', () => {
        const windows = shallow(
            <Provider store={store}>
                <Windows/>
            </Provider>
        );

        expect(windows).toMatchSnapshot();
    });
});