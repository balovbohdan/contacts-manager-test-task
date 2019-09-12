import * as React from 'react';

import {T, utils} from '@lib/entities/calls-history';
import {Contacts} from '@lib/entities/contacts/contact/types';

import {Call} from '@storehouse/actions/contacts/types';
import {ContactWindow as Base} from '@components/contacts-manager';

type Props = {
    call:Call;
    close:()=>void;

    contacts:Contacts;
    active:boolean|number;
    callsHistory:T.CallsHistory;
};

export const ContactWindow = ({call, close, active, contacts, callsHistory}:Props) => {
    active = +active || false;

    if (typeof active !== 'number')
        return null;

    const contact = contacts[active];

    if (typeof contact !== 'object')
        return null;

    const history = utils.filterCallsHistory(contact.id, callsHistory);

    return <Base
        call={call}
        close={close}
        id={contact.id}
        contacts={contacts}
        callsHistory={history}/>;
};