import * as React from 'react';

import {genRndNumber} from '@lib/math';
import {Contact} from '@lib/entities/contacts/contact/types';

import {ModalWindow} from '@components/modal-window';
import {T as Actions} from '@storehouse/actions/contacts';

import {T, Form} from '../form';

type Props = {
    close:Close;
    addContact:Actions.AddContact;
};

type Close = ()=>void;

export const AddContactWindow = (props:Props) => {
    const submit = createSubmit(props.close, props.addContact);

    return (
        <ModalWindow close={props.close} title='Add contact'>
            <Form submit={submit}/>
        </ModalWindow>
    );
};

const createSubmit = (close:Close, addContact:Actions.AddContact) =>
    (formData:T.FormData) => {
        const contact = createContactFromFormData(formData);

        addContact({ contact });
        close();
    };

const createContactFromFormData = (formData:T.FormData):Contact => {
    const id = genRndNumber();

    return Object.assign({}, formData, { id });
};