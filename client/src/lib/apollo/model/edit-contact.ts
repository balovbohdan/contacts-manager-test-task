import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {ContactUpdatableShreds} from '@lib/entities/contacts/contact/types';

const mutation = gql`
    mutation EditContact($id:Int!, $contact:EditContactInput!) {
        editContact(id:$id, contact:$contact) {
            id
        }
    }
`;

type Props = {
    id:number;
    contact:ContactUpdatableShreds;
};

export const editContact = async ({id, contact}:Props) => {
    await client.mutate({
        mutation,
        variables: { id, contact }
    });
};