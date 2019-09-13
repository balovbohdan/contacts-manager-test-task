import * as React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from '@lib/apollo/client';

type Props = {
    children:React.ReactNode;
};

export const Apollo = ({children}:Props) =>
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>;