import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {ContactWindow} from './ContactWindow';
import * as contactWindowCss from './ContactWindow.css';
import * as modalWindowCss from '../../modal-window/ModalWindow.css';

describe('ContactWindow', () => {
    const propsDef = {
        id: 1,
        callsHistory: {},
        call: jest.fn(),
        close: jest.fn(),
        remove: jest.fn(),
        fetchCallsHistory: jest.fn(),
        toggleEditWindow: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380959182534'
        }]
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const window = shallow(<ContactWindow {...props}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should rect on close btn click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window.find(`.${modalWindowCss.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            ...propsDef,
            close: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window.find(`.${modalWindowCss.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should react on call btn click', () => {
        const props = {
            ...propsDef,
            call: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window.find(`.${contactWindowCss.phone_txt}`).simulate('click');
        expect(props.call).toBeCalledTimes(1);
    });

    it('Should react on remove btn click', () => {
        const props = {
            ...propsDef,
            remove: jest.fn()
        };

        const window = mount(<ContactWindow {...props}/>);

        window
            .find(`.${contactWindowCss.actions_btnInnerWrapper__remove}`)
            .simulate('click');

        expect(props.remove).toBeCalledTimes(1);
    });
});