import {T} from './contact';

export const findContact = (id:number, contacts:T.Contacts):T.Contact|never => {
    for (let i in contacts)
        if (contacts.hasOwnProperty(i) && contacts[i].id === id)
            return contacts[i];

    throw new Error(`Failed to look for the '${id}' contact.`);
};