import produce from 'immer';

import {Contacts} from '@lib/entities/contacts/contact/types';
import {CallsHistory} from '@lib/entities/calls-history/types';

import * as T from '../types';
import {Action} from '../Action';

export type State = {
    contacts:Contacts;
    callsHistory:CallsHistory;

    hasMoreContacts:boolean;

    needShowAddContactWindow:boolean;
    needShowContactWindow:boolean|number;
    needShowEditContactWindow:boolean|number;
};

const initialState:State = {
    contacts: [],
    callsHistory: {},

    hasMoreContacts: true,

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
                draft.contacts = [payload.contact].concat(draft.contacts);
                break;

            case Action.REMOVE_CONTACT: {
                for (let i = 0; i < draft.contacts.length; i++) {
                    if (draft.contacts[i].id === payload.id) {
                        draft.contacts.splice(i, 1);
                        break;
                    }
                }

                break;
            }

            case Action.SET_CALLS_HISTORY:
                draft.callsHistory = Object.assign(
                    {},
                    draft.callsHistory,
                    payload.callsHistory
                );
                break;

            case Action.SET_CONTACTS: {
                const {contacts, hasMoreContacts} = payload;

                draft.hasMoreContacts = hasMoreContacts;
                draft.contacts = draft.contacts.concat(contacts);

                break;
            }

            case Action.EDIT_CONTACT: {
                const {id, contact} = payload;

                for (let i = 0; i < draft.contacts.length; i++) {
                    const draftContact = draft.contacts[i];

                    if (draftContact.id === id) {
                        draft.contacts[i] = Object.assign({}, draftContact, contact);
                        break;
                    }
                }

                break;
            }

            case Action.CALL: {
                const {callsHistoryItem} = payload;
                const {id} = callsHistoryItem;

                draft.callsHistory[id] = callsHistoryItem;

                break;
            }
        }
    };

export const contacts = (state:State = initialState, action:T.Action) =>
    produce(state, createSwitch(action));