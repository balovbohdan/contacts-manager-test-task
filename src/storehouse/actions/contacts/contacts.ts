import {Action} from '@storehouse';

import * as T from './types';

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

export const addContact = (payload:T.AddContactPayload) => ({
    payload,
    type: Action.ADD_CONTACT
});

export const editContact = (payload:T.EditContactPayload) => ({
    payload,
    type: Action.EDIT_CONTACT
});

export const call = (payload:T.CallPayload) => ({
    payload,
    type: Action.CALL
});

export const removeContact = (payload:T.RemoveContactPayload) => ({
    payload,
    type: Action.REMOVE_CONTACT
});