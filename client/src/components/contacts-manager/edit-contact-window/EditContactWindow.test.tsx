import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {EditContactWindow} from './EditContactWindow';
import * as submitBtnCss from '../../modal-window/SubmitBtn.css';
import * as modalWindowCss from '../../modal-window/ModalWindow.css';

describe('EditContactWindow', () => {
    const propsDef = {
        edit: jest.fn(),
        close: jest.fn(),
        contact: {
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380951423253'
        }
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const window = shallow(<EditContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<EditContactWindow {...props}/>);

        window.find(`.${modalWindowCss.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<EditContactWindow {...props}/>);

        window.find(`.${modalWindowCss.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should react on submit btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn(),
            edit: jest.fn()
        };

        const window = mount(<EditContactWindow {...props}/>);

        window.find(`.${submitBtnCss.submitBtn}`).simulate('click');

        expect(props.edit).toBeCalledTimes(1);
        expect(props.close).toBeCalledTimes(1);
    });
});