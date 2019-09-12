import * as React from 'react';
import {cloneDeep} from 'lodash';

import {genRndNumber} from '@lib/math';
import {Contact} from '@lib/entities/contacts/contact/types';

import {ModalWindow} from '@components/modal-window';
import {AddContact} from '@storehouse/actions/contacts/types';

import {Form} from './Form';
import * as T from './types';
import css from './AddContactWindow.css';

type Props = {
    close:Close;
    addContact:AddContact;
};

type Close = ()=>void;

export const AddContactWindow = ({close, addContact}:Props) => {
    const submit = createSubmit(close, addContact);

    return (
        <ModalWindow close={close} title='Add contact'>
            <div className={css.main}>
                <Form submit={submit}/>
            </div>
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