import * as React from 'react';
import {shallow} from 'enzyme';

import {Contact} from './Contact';

describe('Contact', () => {
    const propsDef = {
        toggleContactWindow: jest.fn(),
        contact: {
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380971514231'
        }
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const contact = shallow(<Contact {...props}/>);

        expect(contact).toMatchSnapshot();
    });

    it('Should open contact window after click', () => {
        const props = {
            ...propsDef,
            toggleContactWindow: jest.fn()
        };

        const contact = shallow(<Contact {...props}/>);

        contact.simulate('click');
        expect(props.toggleContactWindow).toBeCalledTimes(1);
    });
});