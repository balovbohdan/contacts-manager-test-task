import {combineReducers} from 'redux';

import {root, State as Root} from './root';
import {contacts, State as Contacts} from './contacts';

export const reducers = combineReducers({
    root,
    contacts
});

export type State = {
    root:Root;
    contacts:Contacts;
};