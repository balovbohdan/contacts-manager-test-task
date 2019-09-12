import * as T from '@lib/entities/calls-history/types';
import {Contacts} from '@lib/entities/contacts/contact/types';

import {Call} from '@storehouse/actions/contacts/types';

export type Props = {
    id:number;
    contacts:Contacts;
    callsHistory:T.CallsHistory;

    call:Call;
    close:()=>void;
};

export type BodyProps = {
    id:number;
    call:Call;
    img:string;
    phone:string;
    contacts:Contacts;
    callsHistory:T.CallsHistory;

    tip?:string;
};