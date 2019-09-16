import * as React from 'react';

import * as T from '@lib/entities/contacts/contact/types';
import {T as Actions} from '@storehouse/actions/contacts';

export type Props = {
    contacts:T.Contacts;
    hasMoreContacts:boolean;

    fetchContacts:Actions.FetchContacts;
    toggleContactWindow:Actions.ToggleContactWindow;
};

export type ItemsProps = {
    contacts:T.Contacts;
    toggleContactWindow:Actions.ToggleContactWindow;
};

export type ItemProps = {
    contact:T.Contact;
    toggleContactWindow:Actions.ToggleContactWindow;
};

export type ScrollerProps = {
    hasMore:boolean;
    contactsQty:number;
    fetchMore:()=>void;
    children:React.ReactNode;
};