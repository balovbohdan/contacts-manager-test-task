export type Props = {
    submit:Submit;
    def?:{
        tip?:string;
        name?:string;
        phone?:string;
    };
};

export type FootProps = {
    submit:()=>void;
    isDataValid:boolean;
};

export type SubmitBtnProps = {
    submit:()=>void;
    isDataValid:boolean;
};

export type DataGetter = ()=>FormData;
export type Submit = (data:FormData)=>void;

export type FormData = {
    img:string;
    name:string;
    phone:string;

    tip?:string;
};

