import {CallType} from './CallType';

export type CallsHistory = {[type:string]:Item};

export type Item = {
    id:number;
    time:number;
    type:CallType;
    contactId:number;
};