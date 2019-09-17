import * as React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import {store} from '@storehouse';

import Contacts from './Contacts';

describe('Contacts route', () => {
    it('Should match snapshot', () => {
        const contacts = shallow(
            <Provider store={store}>
                <Contacts/>
            </Provider>
        );

        expect(contacts).toMatchSnapshot();
    });
});