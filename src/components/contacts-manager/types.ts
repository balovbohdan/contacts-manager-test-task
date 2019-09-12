import * as T from '@lib/entities/contacts/contact/types';
import {ToggleContactWindow} from '@storehouse/actions/contacts/types';

export type Props = {
    contacts:T.Contacts;

    toggleAddContactWindow:()=>void;
    toggleContactWindow:ToggleContactWindow;
};

export type HeadProps = {
    toggleAddContactWindow:()=>void;
};

export type AddContactBtnProps = {
    onClick:()=>void;
};