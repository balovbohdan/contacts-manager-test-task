export type FormData = {
    pass:string;
    name:string;
    phone:string;
};

export type FootProps = {
    submit:()=>void;
    isDataValid:boolean;
};