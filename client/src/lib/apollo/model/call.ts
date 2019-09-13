import gql from 'graphql-tag';
import {cloneDeep} from 'lodash';

import {client} from '@lib/apollo';
import {Item} from '@lib/entities/calls-history/types';

const mutation = gql`
    mutation Call($callsHistoryItem:CallInput!) {
        call(callsHistoryItem:$callsHistoryItem) {
            id
        }
    }
`;

type Props = {
    callsHistoryItem:Item;
};

export const call = async (props:Props) => {
    const {callsHistoryItem} = prepareProps(props);

    await client.mutate({
        mutation,
        variables: { callsHistoryItem }
    });
};

const prepareProps = ({callsHistoryItem}):Props => {
    callsHistoryItem = cloneDeep(callsHistoryItem);

    callsHistoryItem.time = String(callsHistoryItem.time);

    return { callsHistoryItem };
};