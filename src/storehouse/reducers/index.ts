import {combineReducers} from 'redux';

import {contacts, State as Contacts} from './contacts';

export const reducers = combineReducers({
    contacts
});

export type State = {
    contacts:Contacts;
};