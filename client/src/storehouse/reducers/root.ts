import produce from 'immer';

import * as T from '../types';
import {Action} from '../Action';

export type State = {
    needShowRegWindow:boolean;
    needShowLoginWindow:boolean;
};

const initialState:State = {
    needShowRegWindow: false,
    needShowLoginWindow: false
};

const createSwitch = ({type, payload}:T.Action) =>
    (draft:State) => {
        switch (type) {
            case Action.TOGGLE_REG_WINDOW:
                draft.needShowRegWindow = !draft.needShowRegWindow;
                break;

            case Action.TOGGLE_LOGIN_WINDOW:
                draft.needShowLoginWindow = !draft.needShowLoginWindow;
                break;
        }
    };

export const root = (state:State = initialState, action:T.Action) =>
    produce(state, createSwitch(action));