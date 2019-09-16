import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {Contacts} from '@lib/entities/contacts/contact/types';

type Props = {
    limit?:number;
    contactsQty?:number;
};

type Res = {
    contacts:Contacts;
    hasMoreContacts:boolean;
};

export const query = gql`
    query GetContacts($contactsQty:Int, $limit:Int) {
        contacts(contactsQty:$contactsQty, limit:$limit) {
            hasMore
            data {
                id
                tip
                img
                name
                phone
            }
        }
    }
`;

export const getContacts = async ({limit, contactsQty}:Props = {}):Promise<Res> => {
    const {data:{contacts}} = await client.query({
        query,
        fetchPolicy: 'cache-first',
        variables: { limit, contactsQty }
    });

    return {
        contacts: contacts.data,
        hasMoreContacts: contacts.hasMore
    };
};