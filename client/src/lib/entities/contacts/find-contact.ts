import {Contacts} from '@lib/entities/contacts/contact/types';

export const findContact = (id:number, contacts:Contacts) => {
    for (let contact of contacts)
        if (contact.id === id)
            return contact;

    return null;
};