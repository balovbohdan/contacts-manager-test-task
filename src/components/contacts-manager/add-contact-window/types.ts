export type Submit = (data:FormData)=>void;

export type FormData = {
    img:string;
    name:string;
    phone:string;

    tip?:string;
};