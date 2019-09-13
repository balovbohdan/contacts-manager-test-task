import * as React from 'react';

import {FetchContacts} from '@storehouse/actions/contacts/types';

type Props = {
    children;
    fetchContacts:FetchContacts;
};

export const DataProvider = ({children, fetchContacts}:Props) => {
    React.useEffect(() => fetchContacts(), []);

    return children;
};