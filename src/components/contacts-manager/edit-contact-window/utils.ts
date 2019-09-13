import * as T from '@components/contacts-manager/form/types';
import {EditContact} from '@storehouse/actions/contacts/types';

import {Close} from './types';

export const createSubmit = (id:number, close:Close, edit:EditContact) =>
    (contact:T.FormData) => {
        edit({ id, contact });
        close();
    };