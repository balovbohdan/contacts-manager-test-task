import {T} from '@lib/entities/contacts/contact';


export type AddContact = (payload:AddContactPayload)=>void;

export type AddContactPayload = {
    contact:T.Contact;
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
    contact:T.ContactShreds;
};