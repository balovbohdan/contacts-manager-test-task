import {Contact} from '@lib/entities/contacts/contact/types';


export type AddContact = (payload:AddContactPayload)=>void;

export type AddContactPayload = {
    contact:Contact;
};


export type ToggleContactWindow = (payload?:ToggleContactWindowPayload)=>void;

export type ToggleContactWindowPayload = {
    id?:number|string;
};


export type Call = (payload:CallPayload)=>void;

export type CallPayload = {
    contactId:number;
};