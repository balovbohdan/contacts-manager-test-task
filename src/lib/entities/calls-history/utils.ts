import {T} from '@lib/entities/calls-history';

export const filterCallsHistory = (contactId:number, callsHistory:T.CallsHistory):T.CallsHistory => {
    const res = {};

    const needContinue = (i:string) =>
        !callsHistory.hasOwnProperty(i)
            || callsHistory[i].contactId !== contactId;

    for (let i in callsHistory)
        if (!needContinue(i))
            res[i] = callsHistory[i];

    return res;
};