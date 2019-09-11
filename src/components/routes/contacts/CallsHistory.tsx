import * as React from 'react';

import {CallsHistory as Base} from '@components/contacts-manager';

type Props = {
    active:boolean;
};

export const CallsHistory = ({active}:Props) =>
    !active
        ? null
        : <Base/>;