import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {User} from '@lib/entities/user/types';

const mutation = gql`
    mutation CreateUser($pass:String!, $name:String!, $phone:String!) {
        createUser(pass:$pass, name:$name, phone:$phone) {
            id
        }
    }
`;

type Props = {
    name:string;
    pass:string;
    phone:string;
};

export const createUser = async ({pass, name, phone}:Props):Promise<User> => {
    const {data} = await client.mutate({
        mutation,
        variables: { pass, name, phone }
    });

    const {id} = data.createUser;

    return { id, name, phone };
};