export type Contacts = {[key:string]:Contact};
export type ContactsRaws = {[key:string]:ContactRaw};

export type Contact = ContactRaw & {
    id:number;
};

export type ContactRaw = {
    img:string;
    name:string;
    phone:string;

    tip?:string;
};

export type ContactShreds = {
    id?:number;
    tip?:string;
    img?:string;
    name?:string;
    phone?:string;
};