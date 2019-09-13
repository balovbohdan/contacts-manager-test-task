import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {Contact} from '@lib/entities/contacts/contact/types';

const mutation = gql`
    mutation AddContact($contact:AddContactInput!) {
        addContact(contact:$contact) {
            id
        }
    }
`;

type Props = {
    contact:Contact;
};

export const addContact = async ({contact}:Props) => {
    await client.mutate({
        mutation,
        variables: { contact }
    });
};