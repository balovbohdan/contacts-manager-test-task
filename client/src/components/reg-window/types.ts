export type Props = {
    close:()=>void;
};

export type FormData = {
    pass:string;
    name:string;
    phone:string;
};

export type BodyProps = {
    close:()=>void;
};

export type FootProps = {
    submit:()=>void;
    isDataValid:boolean;
};