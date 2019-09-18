import {T} from './contact';

export const findContact = (id:number, contacts:T.Contacts):T.Contact|null => {
    for (let contact of contacts)
        if (contact.id === id)
            return contact;

    return null;
};