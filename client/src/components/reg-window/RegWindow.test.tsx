import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {RegWindow} from './RegWindow';
import * as css from '../modal-window/ModalWindow.css';

describe('Registration window', () => {
    it('Should match snapshot', () => {
        const close = jest.fn();
        const window = shallow(<RegWindow close={close}/>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const close = jest.fn();
        const window = mount(<RegWindow close={close}/>);

        window.find(`.${css.closeBtn}`).simulate('click');
        expect(close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const close = jest.fn();
        const window = mount(<RegWindow close={close}/>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(close).toBeCalledTimes(1);
    });
});