import * as T from '@lib/entities/contacts/contact/types';
import {CallsHistory} from '@lib/entities/calls-history/types';

import {ToggleContactWindow} from '@storehouse/actions/contacts/types';

export type Props = {
    contacts:T.Contacts;
    toggleContactWindow:ToggleContactWindow;
};

export type ItemsProps = {
    contacts:T.Contacts;
    toggleContactWindow:ToggleContactWindow;
};

export type ItemProps = {
    contact:T.Contact;
    toggleContactWindow:ToggleContactWindow;
};