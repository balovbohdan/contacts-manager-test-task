import gql from 'graphql-tag';
import * as React from 'react';
import {useQuery} from '@apollo/react-hooks';

type Props = {
    children:React.ReactNode;
};

const QUERY = gql`
    query GetContacts {
        contacts {
            id
            name
            phone
        }
    }
`;

export const DataProvider = ({children}:Props) => {
    const {data, error, loading} = useQuery(QUERY);

    if (loading)
        return null;

    if (error)
        return <h1>GraphQL error happened...</h1>;

    console.log(data);

    return <>{children}</>;
};