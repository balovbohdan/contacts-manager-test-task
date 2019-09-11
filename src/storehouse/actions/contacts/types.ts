import {ContactRaw} from '@lib/contacts/contact/types';

export type AddContactPayload = {
    contact:ContactRaw;
};

export type AddContact = (payload:AddContactPayload)=>void;