import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {ContactWindow} from './ContactWindow';
import * as css from '../../modal-window/ModalWindow.css';

describe('ContactWindow, root version', () => {
    const propsDef = {
        call: jest.fn(),
        close: jest.fn(),
        remove: jest.fn(),
        toggleEditWindow: jest.fn(),
        fetchCallsHistory: jest.fn(),

        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380927163543'
        }],
        active: 1,
        callsHistory: {}
    };

    it('Should match snapshot when active', () => {
        const props = { ...propsDef };
        const window = shallow(<ContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should match snapshot when not active', () => {
        const props = {
            ...propsDef,
            active: false
        };

        const window = shallow(<ContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window.find(`.${css.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });
});