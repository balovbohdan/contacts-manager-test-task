import * as React from 'react';

import {Contacts} from '@lib/entities/contacts/contact/types';
import {EditContact} from '@storehouse/actions/contacts/types';

import {
    EditContactWindow as Base
} from '@components/contacts-manager/edit-contact-window';

type Props = {
    close:()=>void;
    edit:EditContact;

    contacts:Contacts;
    active:boolean|number;
};

export const EditContactWindow = (props:Props) => {
    const active = +props.active || false;

    if (typeof active !== 'number')
        return null;

    const contact = props.contacts[active];

    return typeof contact !== 'object'
        ? null
        : <Base
            contact={contact}
            edit={props.edit}
            close={props.close}/>;
};