import * as React from 'react';
import {shallow} from 'enzyme';

import {ContactsManager} from './ContactsManager';

describe('ContactsManager', () => {
    const propsDef = {
        hasMoreContacts: true,
        fetchContacts: jest.fn(),
        toggleContactWindow:jest.fn(),
        toggleAddContactWindow: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380967162534'
        }]
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const manager = shallow(<ContactsManager {...props}/>);

        expect(manager).toMatchSnapshot();
    });
});