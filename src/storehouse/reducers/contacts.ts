import produce from 'immer';

import userImg from '@img/user.svg';
import {Contact} from '@lib/contacts/contact/types';

import * as T from '../types';
import {Actions} from '../Actions';

export type State = {
    contacts:Contact[];
    showAddContactWindow:boolean;
};

const initialState:State = {
    contacts: [
        {
            id: 1,
            name: 'Robert Martin',
            img: userImg,
            phone: '+380967154028'
        },
        {
            id: 2,
            name: 'Robert Martin',
            img: userImg,
            phone: '+380967154028'
        },
        {
            id: 3,
            name: 'Robert Martin',
            img: userImg,
            phone: '+380967154028'
        },
        {
            id: 4,
            name: 'Robert Martin',
            img: userImg,
            phone: '+380967154028'
        }
    ],
    showAddContactWindow: false
};

const createSwitch = ({type, payload}:T.Action) =>
    (draft:State) => {
        payload = payload || {};

        switch (type) {
            case Actions.TOGGLE_ADD_CONTACT_WINDOW:
                draft.showAddContactWindow = !draft.showAddContactWindow;
                break;

            case Actions.ADD_CONTACT:
                draft.contacts = [payload.contact].concat(draft.contacts);
                break;
        }
    };

export const contacts = (state:State = initialState, action:T.Action) =>
    produce(state, createSwitch(action));