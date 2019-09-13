import gql from 'graphql-tag';

import {client} from '@lib/apollo';
import {CallsHistory} from '@lib/entities/calls-history/types';

const query = gql`
    query GetCallsHistory($contactId:Int!) {
        callsHistory(contactId:$contactId) {
            id
            type
            time
            contactId
        }
    }
`;

type Props = {
    contactId:number;
};

export const getCallsHistory = async ({contactId}:Props):Promise<CallsHistory> => {
    const {data} = await client.query({
        query,
        variables: { contactId }
    });

    return createRes(data);
};

const createRes = ({callsHistory}):CallsHistory => {
    const res:CallsHistory = {};

    for (let item of callsHistory)
        res[item.id] = {
            ...item,
            time: +item.time
        };

    return res;
};