import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {RightBar} from './RightBar';
import * as css from './RightBar.css';

describe('RightBar of Header', () => {
    it('Should match snapshot', () => {
        const toggleRegWindow = jest.fn();
        const toggleLoginWindow = jest.fn();

        const bar = shallow(
            <RightBar
                toggleRegWindow={toggleRegWindow}
                toggleLoginWindow={toggleLoginWindow}/>
        );

        expect(bar).toMatchSnapshot();
    });

    it('Should react on btns clicks', () => {
        const toggleRegWindow = jest.fn();
        const toggleLoginWindow = jest.fn();

        const bar = mount(
            <RightBar
                toggleRegWindow={toggleRegWindow}
                toggleLoginWindow={toggleLoginWindow}/>
        );

        bar.find(`.${css.btn}.${css.btn__reg}`).simulate('click');
        bar.find(`.${css.btn}.${css.btn__login}`).simulate('click');

        expect(toggleRegWindow).toBeCalledTimes(1);
        expect(toggleLoginWindow).toBeCalledTimes(1);
    });
});