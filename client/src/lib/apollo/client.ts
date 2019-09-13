import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {config} from '@root/config';

const {uri} = config.apolloServer;

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri })
});

export default client;