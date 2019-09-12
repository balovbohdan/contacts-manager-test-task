import produce from 'immer';

import userImg from '@img/user.svg';

import {CallType} from '@lib/entities/calls-history';
import {Contacts} from '@lib/entities/contacts/contact/types';
import {CallsHistory} from '@lib/entities/calls-history/types';

import * as T from '../types';
import {Action} from '../Action';

export type State = {
    contacts:Contacts;
    callsHistory:CallsHistory;

    needShowAddContactWindow:boolean;
    needShowContactWindow:boolean|number;
    needShowEditContactWindow:boolean|number;
};

const initialState:State = {
    contacts: {
        1: {
            id: 1,
            name: 'Robert Martin',
            img: userImg,
            tip: 'He is Robert Martin',
            phone: '+380967154028'
        },
        2: {
            id: 2,
            name: 'Bohdan Balov',
            img: userImg,
            phone: '+380965174916'
        },
        3: {
            id: 3,
            name: 'Steve Jobs',
            img: userImg,
            phone: '+380960175518'
        },
        4: {
            id: 4,
            name: 'Barack Obama',
            img: userImg,
            phone: '+380981972041'
        }
    },
    callsHistory: {
        1: {
            id: 1,
            contactId: 2,
            time: 1568273613185,
            type: CallType.INCOME
        },
        2: {
            id: 2,
            contactId: 3,
            time: 1568273611185,
            type: CallType.INCOME
        },
        3: {
            id: 3,
            contactId: 4,
            time: 1568273611185,
            type: CallType.OUTCOME
        },
        4: {
            id: 4,
            contactId: 1,
            time: 1568273611185,
            type: CallType.OUTCOME
        },
    },
    needShowContactWindow: false,
    needShowAddContactWindow: false,
    needShowEditContactWindow: false
};

const createSwitch = ({type, payload}:T.Action) =>
    (draft:State) => {
        payload = payload || {};

        switch (type) {
            case Action.TOGGLE_ADD_CONTACT_WINDOW:
                draft.needShowAddContactWindow = !draft.needShowAddContactWindow;
                break;

            case Action.TOGGLE_EDIT_CONTACT_WINDOW:
                draft.needShowEditContactWindow = parseInt(payload.id, 10) || false;
                break;

            case Action.TOGGLE_CONTACT_WINDOW:
                draft.needShowContactWindow = parseInt(payload.id, 10) || false;
                break;

            case Action.ADD_CONTACT:
                draft.contacts[payload.contact.id] = payload.contact;
                break;

            case Action.REMOVE_CONTACT:
                delete draft.contacts[payload.id];
                break;

            case Action.EDIT_CONTACT: {
                const {id} = payload.contact;

                draft.contacts[id] = Object.assign(
                    {},
                    draft.contacts[id],
                    payload.contact
                );

                break;
            }

            case Action.CALL: {
                const {contactId} = payload;
                const ids = Object.keys(draft.callsHistory);
                const id = +ids[ids.length - 1] + 1;

                draft.callsHistory[id] = {
                    id,
                    contactId,
                    time: Date.now(),
                    type: CallType.OUTCOME
                };

                break;
            }
        }
    };

export const contacts = (state:State = initialState, action:T.Action) =>
    produce(state, createSwitch(action));