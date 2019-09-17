import * as React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import {store} from '@storehouse';

import ContactsLazy from './ContactsLazy';

describe('Contacts route, lazy version', () => {
    it('Should match snapshot', () => {
        const contacts = shallow(
            <Provider store={store}>
                <ContactsLazy/>
            </Provider>
        );

        expect(contacts).toMatchSnapshot();
    });
});