import {EditContact} from '@storehouse/actions/contacts/types';

import {Close} from './types';
import * as T from '../contact-form/types';

export const createSubmit = (id:number, close:Close, edit:EditContact) =>
    (contact:T.FormData) => {
        edit({ id, contact });
        close();
    };