import * as React from 'react';

import {ModalWindow} from '@components/modal-window';
import {T as Actions} from '@storehouse/actions/contacts';
import {Contact, Contacts} from '@lib/entities/contacts/contact/types';

import {T, ContactForm} from '../contact-form';

type Props = {
    close:Close;
    contacts:Contacts;
    addContact:Actions.AddContact;

    def?:{
        tip?:string;
        name?:string;
        phone?:string;
    };
};

type Close = ()=>void;

export const AddContactWindow = (props:Props) => {
    const submit = createSubmit(props.close, props.addContact, props.contacts);

    return (
        <ModalWindow close={props.close} title='Add contact'>
            <ContactForm def={props.def} submit={submit}/>
        </ModalWindow>
    );
};

const createSubmit = (close:Close, addContact:Actions.AddContact, contacts:Contacts) =>
    (formData:T.FormData) => {
        const contact = createContactFromFormData(formData, contacts);

        addContact({ contact });
        close();
    };

const createContactFromFormData = (formData:T.FormData, contacts:Contacts):Contact => {
    const id = contacts[0].id + 1;

    return Object.assign({}, formData, { id });
};