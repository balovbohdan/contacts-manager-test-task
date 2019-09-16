import {isEmpty} from 'lodash';

import {Contacts} from '@lib/entities/contacts/contact/types';
import {FetchContacts} from '@storehouse/actions/contacts/types';

export const createContactsFetcher = (contacts:Contacts, fetch:FetchContacts) =>
    () => {
        const lastId = getLastId(contacts);

        fetch({ lastId });
    };

const getLastId = (contacts:Contacts):number|null => {
    if (isEmpty(contacts))
        return null;

    const contactsIds = getSortedContactsIds(contacts);

    return contactsIds[contactsIds.length - 1];
};

const getSortedContactsIds = (contacts:Contacts):number[] =>
    Object.keys(contacts)
        .map(id => +id)
        .sort((a, b) => a - b);