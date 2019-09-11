import * as React from 'react';

import {AddContact} from '@storehouse/actions/contacts/types';
import {AddContactWindow as Base} from '@components/contacts-manager';

type Props = {
    active:boolean;

    close:()=>void;
    addContact:AddContact;
};

export const AddContactWindow = ({active, close, addContact}:Props) =>
    !active
        ? null
        : <Base close={close} addContact={addContact}/>;