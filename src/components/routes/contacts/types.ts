import {Contacts} from '@lib/entities/contacts/contact/types';
import {CallsHistory} from '@lib/entities/calls-history/types';

import {T as Actions} from '@storehouse/actions/contacts';

export type ContactsProps = {
    contacts:Contacts;
    callsHistory:CallsHistory;

    needShowAddContactWindow:boolean;
    needShowContactWindow:boolean|number;

    call:Actions.Call;
    addContact:Actions.AddContact;
    toggleAddContactWindow:()=>void;
    toggleContactWindow:Actions.ToggleContactWindow;
};