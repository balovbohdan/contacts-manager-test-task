import {Contact} from '@lib/entities/contacts/contact/types';
import {EditContact} from '@storehouse/actions/contacts/types';

export type Props = {
    close:Close;
    contact:Contact;
    edit:EditContact;
};

export type Close = ()=>void;