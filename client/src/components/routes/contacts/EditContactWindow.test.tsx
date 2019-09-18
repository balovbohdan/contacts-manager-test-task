import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {EditContactWindow} from './EditContactWindow';
import * as css from '../../modal-window/ModalWindow.css';

describe('EditContactWindow, root version', () => {
    const propsDef = {
        active: 1,
        close: jest.fn(),
        edit: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380967164354'
        }]
    };

    it('Should match snapshot when active', () => {
        const props = { ...propsDef };
        const window = shallow(<EditContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should match snapshot when not active', () => {
        const props = {
            ...propsDef,
            active: false
        };

        const window = shallow(<EditContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<EditContactWindow {...props}/>);

        window.find(`.${css.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<EditContactWindow {...props}/>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });
});