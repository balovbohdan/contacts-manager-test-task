import * as React from 'react';

import {T as Actions} from '@storehouse/actions/contacts';
import {Contacts} from '@lib/entities/contacts/contact/types';
import {AddContactWindow as Base} from '@components/contacts-manager';

type Props = {
    active:boolean;
    contacts:Contacts;

    close:()=>void;
    addContact:Actions.AddContact;
};

export const AddContactWindow = (props:Props) =>
    !props.active
        ? null
        : <Base
            close={props.close}
            contacts={props.contacts}
            addContact={props.addContact}/>;