import * as React from 'react';
import {isEmpty} from 'lodash';

type Props = {
    children;
    fetchContacts:()=>void;
};

export const DataProvider = ({children, fetchContacts}:Props) => {
    React.useEffect(() => fetchContacts(), []);

    return children;
};