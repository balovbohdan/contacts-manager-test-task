import * as React from 'react';

import {T as Actions} from '@storehouse/actions/contacts';
import {AddContactWindow as Base} from '@components/contacts-manager';

type Props = {
    active:boolean;

    close:()=>void;
    addContact:Actions.AddContact;
};

export const AddContactWindow = (props:Props) =>
    !props.active
        ? null
        : <Base
            close={props.close}
            addContact={props.addContact}/>;