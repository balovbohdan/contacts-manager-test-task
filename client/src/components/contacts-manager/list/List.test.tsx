import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {List} from './List';

describe('Contacts list', () => {
    const propsDef = {
        hasMoreContacts: true,
        fetchContacts: jest.fn(),
        toggleContactWindow: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380975142353'
        }]
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const list = shallow(<List {...props}/>);

        expect(list).toMatchSnapshot();
    });

    it('Should call contacts fetcher function', () => {
        const props = {
            ...propsDef,
            fetchContacts: jest.fn()
        };

        mount(<List {...props}/>);
        expect(props.fetchContacts).toBeCalledTimes(1);
    });
});