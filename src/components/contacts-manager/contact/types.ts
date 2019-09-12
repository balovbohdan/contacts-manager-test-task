import * as T from '@lib/entities/contacts/contact/types';

import {ToggleContactWindow} from '@storehouse/actions/contacts/types';

export type Props = {
    contact:T.Contact;
    toggleContactWindow:ToggleContactWindow;
};

export type AvatarProps = {
    img:string;
};

export type NameProps = {
    name:string;
};