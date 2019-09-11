export type Contact = ContactRaw & {
    id:number;
};

export type ContactRaw = {
    img:string;
    name:string;
    phone:string;

    tip?:string;
};