import {T as Contacts} from '@lib/entities/contacts/contact';
import {CallsHistory} from '@lib/entities/calls-history/types';

export type AddContact = (payload:AddContactPayload)=>void;

export type AddContactPayload = {
    contact:Contacts.Contact;
};


export type ToggleContactWindow = (payload?:ToggleContactWindowPayload)=>void;

export type ToggleContactWindowPayload = {
    id?:number|string;
};


export type Call = (payload:CallPayload)=>void;

export type CallPayload = {
    contactId:number;
};


export type RemoveContact = (payload:RemoveContactPayload)=>void;

export type RemoveContactPayload = {
    id:number;
};


export type ToggleEditContactWindow = (payload?:ToggleEditContactWindowPayload)=>void;

export type ToggleEditContactWindowPayload = {
    id:number;
};


export type EditContact = (payload:EditContactPayload)=>void;

export type EditContactPayload = {
    id:number;
    contact:Contacts.ContactUpdatableShreds;
};


export type FetchContacts = ()=>void;


export type SetContacts = (payload:SetContactsPayload)=>void;

export type SetContactsPayload = {
    contacts:Contacts.Contacts;
};


export type FetchCallsHistory = (payload:FetchCallsHistoryPayload)=>void;

export type FetchCallsHistoryPayload = {
    contactId:number;
};


export type SetCallsHistory = ()=>void;

export type SetCallsHistoryPayload = {
    callsHistory:CallsHistory;
};