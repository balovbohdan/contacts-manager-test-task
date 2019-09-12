import * as React from 'react';

import {ModalWindow} from '@components/modal-window';

import {Form} from '../form';
import {Props} from './types';
import {createSubmit} from './utils';

export const EditContactWindow = ({edit, close, contact}:Props) => {
    const {id, tip, name, phone} = contact;
    const title = `Edit «${name}»`;
    const def = { tip, name, phone };
    const submit = createSubmit(id, close, edit);

    return (
        <ModalWindow close={close} title={title}>
            <Form def={def} submit={submit}/>
        </ModalWindow>
    );
};