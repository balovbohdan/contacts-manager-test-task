import * as React from 'react';

import {FetchCallsHistory} from '@storehouse/actions/contacts/types';

type Props = {
    children;
    contactId:number;
    fetchCallsHistory:FetchCallsHistory;
};

export const DataProvider = (props:Props) => {
    const {contactId, children, fetchCallsHistory} = props;

    React.useEffect(() => fetchCallsHistory({ contactId }), []);

    return children;
};