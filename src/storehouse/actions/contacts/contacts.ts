import {Actions} from '@storehouse';

import * as T from './types';

export const toggleAddContactWindow = () => ({
    type: Actions.TOGGLE_ADD_CONTACT_WINDOW
});

export const addContact = (payload:T.AddContactPayload) => ({
    payload,
    type: Actions.ADD_CONTACT
});