import {Action} from '@storehouse';

import {model} from '@lib/apollo';
import {genRndNumber} from '@lib/math';
import {CallType} from '@lib/entities/calls-history';

import * as T from './types';

export const fetchCallsHistory = ({contactId}:T.FetchCallsHistoryPayload) =>
    async dispatch => {
        const callsHistory = await model.getCallsHistory({ contactId });
        const action = setCallsHistory({ callsHistory });

        dispatch(action);
    };

export const setCallsHistory = (payload:T.SetCallsHistoryPayload) => ({
    payload,
    type: Action.SET_CALLS_HISTORY
});

export const fetchContacts = () =>
    async dispatch => {
        const contacts = await model.getContacts();
        const action = setContacts({ contacts });

        dispatch(action);
    };

export const setContacts = (payload:T.SetContactsPayload) => ({
    payload,
    type: Action.SET_CONTACTS
});

export const toggleContactWindow = (payload?:T.ToggleContactWindowPayload) => ({
    payload,
    type: Action.TOGGLE_CONTACT_WINDOW
});

export const toggleAddContactWindow = () => ({
    type: Action.TOGGLE_ADD_CONTACT_WINDOW
});

export const toggleEditContactWindow = (payload?:T.ToggleEditContactWindowPayload) => ({
    payload,
    type:Action.TOGGLE_EDIT_CONTACT_WINDOW
});

export const addContact = (payload:T.AddContactPayload) => {
    const {contact} = payload;

    const handleError = e => {
        const {id} = contact;

        removeContact({ id });
        console.warn(e);
    };

    model.addContact({ contact })
        .catch(handleError);

    return {
        payload,
        type: Action.ADD_CONTACT
    };
};

export const editContact = (payload:T.EditContactPayload) => {
    const {id, contact} = payload;
    const handleError = e => console.warn(e);

    model.editContact({ id, contact })
        .catch(handleError);

    return {
        payload,
        type: Action.EDIT_CONTACT
    };
};

export const call = (payload:T.CallPayload) =>
    async dispatch => {
        const handleError = e => console.warn(e);

        const callsHistoryItem = {
            time: Date.now(),
            id: genRndNumber(),
            type: CallType.OUTCOME,
            contactId: payload.contactId
        };

        model.call({ callsHistoryItem })
            .catch(handleError);

        dispatch({
            type: Action.CALL,
            payload: { callsHistoryItem }
        });
    };

export const removeContact = (payload:T.RemoveContactPayload) => {
    const {id} = payload;
    const handleError = e => console.warn(e);

    model.removeContact({ id })
        .catch(handleError);

    return {
        payload,
        type: Action.REMOVE_CONTACT
    };
};