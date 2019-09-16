import * as React from 'react';

import {findContact} from '@lib/entities/contacts';
import {T, utils} from '@lib/entities/calls-history';
import {Contacts} from '@lib/entities/contacts/contact/types';

import {T as Actions} from '@storehouse/actions/contacts';
import {ContactWindow as Base} from '@components/contacts-manager';

type Props = {
    close:()=>void;
    call:Actions.Call;
    remove:Actions.RemoveContact;
    toggleEditWindow:Actions.ToggleEditContactWindow;

    contacts:Contacts;
    active:boolean|number;
    callsHistory:T.CallsHistory;
    fetchCallsHistory:Actions.FetchCallsHistory;
};

export const ContactWindow = (props:Props) => {
    const active = +props.active || false;

    if (typeof active !== 'number')
        return null;

    const contact = findContact(active, props.contacts);

    if (!contact)
        return null;

    const history = utils.filterCallsHistory(
        contact.id,
        props.callsHistory
    );

    return <Base
        id={contact.id}
        call={props.call}
        close={props.close}
        remove={props.remove}
        callsHistory={history}
        contacts={props.contacts}
        toggleEditWindow={props.toggleEditWindow}
        fetchCallsHistory={props.fetchCallsHistory}/>;
};