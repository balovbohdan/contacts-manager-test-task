import * as T from '@components/contacts-manager/form/types';
import {EditContact} from '@storehouse/actions/contacts/types';

import {Close} from './types';

export const createSubmit = (id:number, close:Close, edit:EditContact) =>
    (formData:T.FormData) => {
        const contact = prepareContact(id, formData);

        edit({ contact });
        close();
    };

const prepareContact = (id:number, formData:T.FormData) =>
    Object.assign({}, formData, { id });