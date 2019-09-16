import {Contacts} from '@lib/entities/contacts/contact/types';
import {CallsHistory} from '@lib/entities/calls-history/types';

import {T as Actions} from '@storehouse/actions/contacts';

export type ContactsProps = {
    contacts:Contacts;
    callsHistory:CallsHistory;

    hasMoreContacts:boolean;

    needShowAddContactWindow:boolean;
    needShowContactWindow:boolean|number;
    needShowEditContactWindow:boolean|number;

    call:Actions.Call;
    addContact:Actions.AddContact;
    editContact:Actions.EditContact;
    toggleAddContactWindow:()=>void;
    removeContact:Actions.RemoveContact;
    fetchContacts:Actions.FetchContacts;
    fetchCallsHistory:Actions.FetchCallsHistory;
    toggleContactWindow:Actions.ToggleContactWindow;
    toggleEditContactWindow:Actions.ToggleEditContactWindow;
};