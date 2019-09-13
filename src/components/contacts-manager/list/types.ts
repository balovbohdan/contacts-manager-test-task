import * as T from '@lib/entities/contacts/contact/types';
import {T as Actions} from '@storehouse/actions/contacts';

export type Props = {
    contacts:T.Contacts;

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