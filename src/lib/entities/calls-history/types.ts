import {CallType} from '@lib/entities/calls-history';

export type CallsHistory = {[type:string]:Item};

export type Item = {
    id:number;
    time:number;
    type:CallType;
    contactId:number;
};