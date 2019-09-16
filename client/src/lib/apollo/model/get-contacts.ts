import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {Contacts} from '@lib/entities/contacts/contact/types';

type Props = {
    limit?:number;
    lastId?:number|null;
};

type Res = {
    contacts:Contacts;
    hasMoreContacts:boolean;
};

export const query = gql`
    query GetContacts($lastId:Int, $limit:Int) {
        contacts(lastId:$lastId, limit:$limit) {
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

export const getContacts = async ({limit, lastId}:Props = {}):Promise<Res> => {
    const {data} = await client.query({
        query,
        fetchPolicy: 'cache-first',
        variables: { limit, lastId }
    });

    return createRes(data);
};

const createRes = ({contacts:{data, hasMore}}):Res => {
    const contacts:Contacts = {};

    for (let contact of data)
        contacts[contact.id] = contact;

    return {
        contacts,
        hasMoreContacts: hasMore
    };
};