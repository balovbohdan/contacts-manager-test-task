import gql from 'graphql-tag';

import {client} from '@lib/apollo';

const mutation = gql`
    mutation RemoveContact($id:Int!) {
        removeContact(id:$id) {
            id
        }
    }
`;

type Props = {
    id:number;
};

export const removeContact = async ({id}:Props) => {
    await client.mutate({
        mutation,
        variables: { id }
    });
};