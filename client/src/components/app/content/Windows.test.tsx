import * as React from 'react';
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';

import {store} from '@storehouse';
import {root as actions} from '@storehouse/actions';

import {Windows} from './Windows';

describe('Root windows', () => {
    const getWindowProps = (windows, index:number) =>
        windows.childAt(0).childAt(0).childAt(index).props();

    it('Should match snapshot', () => {
        const windows = shallow(
            <Provider store={store}>
                <Windows/>
            </Provider>
        );

        expect(windows).toMatchSnapshot();
    });

    it('Should open/close registration window', () => {
        const windows = mount(
            <Provider store={store}>
                <Windows/>
            </Provider>
        );

        const toggleWindow = () =>
            store.dispatch(actions.toggleRegWindow());

        const needShow = ():boolean =>
            getWindowProps(windows, 0).needShow;

        expect(needShow()).toBe(false);

        toggleWindow();
        windows.update();
        expect(needShow()).toBe(true);

        toggleWindow();
        windows.update();
        expect(needShow()).toBe(false);
    });

    it('Should open/close login window', () => {
        const windows = mount(
            <Provider store={store}>
                <Windows/>
            </Provider>
        );

        const toggleWindow = () =>
            store.dispatch(actions.toggleLoginWindow());

        const needShow = ():boolean =>
            getWindowProps(windows, 1).needShow;

        expect(needShow()).toBe(false);

        toggleWindow();
        windows.update();
        expect(needShow()).toBe(true);

        toggleWindow();
        windows.update();
        expect(needShow()).toBe(false);
    });
});