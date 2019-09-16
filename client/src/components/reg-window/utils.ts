import * as T from './types';

export const checkFormData = ({pass, name, phone}:T.FormData):boolean =>
    !!(pass && name && phone);