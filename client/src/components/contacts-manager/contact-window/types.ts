import * as T from '@lib/entities/calls-history/types';
import {Contacts} from '@lib/entities/contacts/contact/types';

import {T as Actions} from '@storehouse/actions/contacts';

export type Props = {
    id:number;
    contacts:Contacts;
    callsHistory:T.CallsHistory;

    call:Actions.Call;
    close:()=>void;
    remove:Actions.RemoveContact;
    fetchCallsHistory:Actions.FetchCallsHistory;
    toggleEditWindow:Actions.ToggleEditContactWindow;
};

export type BodyProps = {
    id:number;
    img:string;
    phone:string;
    contacts:Contacts;
    callsHistory:T.CallsHistory;

    close:()=>void;
    call:Actions.Call;
    remove:Actions.RemoveContact;
    fetchCallsHistory:Actions.FetchCallsHistory;
    toggleEditWindow:Actions.ToggleEditContactWindow;

    tip?:string;
};

export type ActionsProps = {
    id:number;

    close:()=>void;
    remove:Actions.RemoveContact;
    toggleEditWindow:Actions.ToggleEditContactWindow;
};