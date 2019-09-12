import * as React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import createClient from '@lib/apollo/factory';

type Props = {
    children:React.ReactNode;
};

const client = createClient();

export const Apollo = ({children}:Props) =>
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>;