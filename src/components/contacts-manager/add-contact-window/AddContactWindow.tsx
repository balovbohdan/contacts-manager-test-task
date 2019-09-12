import * as React from 'react';

import {genRndNumber} from '@lib/math';
import {Contact} from '@lib/entities/contacts/contact/types';

import {ModalWindow} from '@components/modal-window';
import {AddContact} from '@storehouse/actions/contacts/types';

import {T, Form} from '../form';

type Props = {
    close:Close;
    addContact:AddContact;
};

type Close = ()=>void;

export const AddContactWindow = ({close, addContact}:Props) => {
    const submit = createSubmit(close, addContact);

    return (
        <ModalWindow close={close} title='Add contact'>
            <Form submit={submit}/>
        </ModalWindow>
    );
};

const createSubmit = (close:Close, addContact:AddContact) =>
    (formData:T.FormData) => {
        const contact = createContactFromFormData(formData);

        addContact({ contact });
        close();
    };

const createContactFromFormData = (formData:T.FormData):Contact => {
    const id = genRndNumber();

    return Object.assign({}, formData, { id });
};