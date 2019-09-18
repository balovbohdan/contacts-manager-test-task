import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {AddContactWindow} from './AddContactWindow';
import * as windowCss from '../../modal-window/ModalWindow.css';
import * as submitBtnCss from '../../modal-window/SubmitBtn.css';

describe('AddContactWindow', () => {
    const propsDef = {
        close: jest.fn(),
        addContact: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380951419184'
        }]
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const window = shallow(<AddContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<AddContactWindow {...props}/>);

        window.find(`.${windowCss.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<AddContactWindow {...props}/>);

        window.find(`.${windowCss.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should react on submit btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn(),
            addContact: jest.fn(),
            def: {
                name: 'name',
                phone: '+380951410191'
            }
        };

        const window = mount(<AddContactWindow {...props}/>);

        window.find(`.${submitBtnCss.submitBtn}`).simulate('click');

        expect(props.close).toBeCalledTimes(1);
        expect(props.addContact).toBeCalledTimes(1);
    });

    it('Should not react on submit btn click when data is invalid', () => {
        const props = {
            ...propsDef,
            close: jest.fn(),
            addContact: jest.fn(),
            def: {
                name: '',
                phone: '+380913231065'
            }
        };

        const window = mount(<AddContactWindow {...props}/>);

        window.find(`.${submitBtnCss.submitBtn}`).simulate('click');

        expect(props.close).toBeCalledTimes(0);
        expect(props.addContact).toBeCalledTimes(0);
    });
});