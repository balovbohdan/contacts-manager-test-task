import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {LoginWindow} from './LoginWindow';
import * as css from '../modal-window/ModalWindow.css';

describe('LoginWindow', () => {
    it('Should match snapshot', () => {
        const close = jest.fn();
        const window = shallow(<LoginWindow close={close}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const close = jest.fn();
        const window = mount(<LoginWindow close={close}/>);

        window.find(`.${css.closeBtn}`).simulate('click');
        expect(close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const close = jest.fn();
        const window = mount(<LoginWindow close={close}/>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(close).toBeCalledTimes(1);
    });
});