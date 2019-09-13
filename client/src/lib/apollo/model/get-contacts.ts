import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {Contacts} from '@lib/entities/contacts/contact/types';

const query = gql`
    query GetContacts {
        contacts {
            id
            tip
            img
            name
            phone
        }
    }
`;

export const getContacts = async ():Promise<Contacts> => {
    const {data} = await client.query({
        query,
        fetchPolicy: 'cache-first'
    });

    return createRes(data);
};

const createRes = ({contacts}):Contacts => {
    const res:Contacts = {};

    for (let contact of contacts)
        res[contact.id] = contact;

    return res;
};