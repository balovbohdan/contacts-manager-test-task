import * as T from './types';

export const createSubmit = (isDataValid:boolean, submit:T.Submit, getData:T.DataGetter) =>
    () => {
        if (!isDataValid) return;

        const data = getData();

        submit(data);
    };

export const checkFormData = ({name, phone}:T.FormData):boolean =>
    !!(name && phone);