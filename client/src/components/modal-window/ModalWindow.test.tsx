import * as React from 'react';
import {mount, shallow} from 'enzyme';

import * as css from './ModalWindow.css';
import {ModalWindow} from './ModalWindow';

describe('ModalWindow', () => {
    it('Should match snapshot', () => {
        const props = {
            title: 'Foo',
            close: jest.fn()
        };

        const window = shallow(<ModalWindow {...props}>Foo</ModalWindow>);

        expect(window).toMatchSnapshot();
    });

    it('Should react on close btn click', () => {
        const props = {
            title: 'Foo',
            close: jest.fn()
        };

        const window = mount(<ModalWindow {...props}>Foo</ModalWindow>);

        window.find(`.${css.closeBtn}`).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });

    it('Should close after empty space click', () => {
        const props = {
            title: 'Foo',
            close: jest.fn()
        };

        const window = mount(<ModalWindow {...props}>Foo</ModalWindow>);

        window.find(`.${css.main}`).at(0).simulate('click');
        expect(props.close).toBeCalledTimes(1);
    });
});