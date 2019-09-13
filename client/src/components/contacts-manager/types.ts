import * as T from '@lib/entities/contacts/contact/types';
import {T as Actions} from '@storehouse/actions/contacts';

export type Props = {
    contacts:T.Contacts;

    fetchContacts:Actions.FetchContacts;
    toggleAddContactWindow:()=>void;
    toggleContactWindow:Actions.ToggleContactWindow;
};

export type HeadProps = {
    toggleAddContactWindow:()=>void;
};

export type AddContactBtnProps = {
    onClick:()=>void;
};