import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {AddContactWindow} from './AddContactWindow';
import * as css from '../../modal-window/ModalWindow.css';

describe('AddContactWindow, root version', () => {
    it('Should match snapshot when active', () => {
        const props = {
            active: true,
            contacts: [],
            close: jest.fn(),
            addContact: jest.fn()
        };

        const window = shallow(<AddContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should match snapshot when not active', () => {
        const props = {
            active: false,
            contacts: [],
            close: jest.fn(),
            addContact: jest.fn()
        };

        const window = shallow(<AddContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            active: true,
            contacts: [],
            close: jest.fn(),
            addContact: jest.fn()
        };

       const window = mount(<AddContactWindow {...props}/>);

       window.find(`.${css.closeBtn}`).simulate('click');
       expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            active: true,
            contacts: [],
            close: jest.fn(),
            addContact: jest.fn()
        };

        const window = mount(<AddContactWindow {...props}/>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });
});