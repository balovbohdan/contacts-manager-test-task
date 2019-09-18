import {Action} from '@storehouse';

import * as actions from './root';

describe('Root actions', () => {
    it('Should toggle registration window', () => {
        const action = actions.toggleRegWindow();

        const expectedAction = {
            acton: Action.TOGGLE_REG_WINDOW
        };

        expect(action).toEqual(expectedAction);
    });

    it('Should toggle login window', () => {
        const action = actions.toggleLoginWindow();

        const expectedAction = {
            action: Action.TOGGLE_LOGIN_WINDOW
        };

        expect(action).toEqual(expectedAction);
    });
});