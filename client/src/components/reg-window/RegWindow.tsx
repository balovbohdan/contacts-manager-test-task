import * as React from 'react';

import inputCss from '@css/input.css';
import {createUser} from '@lib/apollo/model';
import {ModalWindow, SubmitBtn} from '@components/modal-window';

import * as T from './types';
import * as utils from './utils';
import css from './RegWindow.css';

const {useState, useEffect, useCallback} = React;

export const RegWindow = ({close}:T.Props) =>
    <ModalWindow title='Register' close={close}>
        <Body close={close}/>
    </ModalWindow>;

const Body = ({close}:T.BodyProps) => {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(true);

    const getData = ():T.FormData => ({ pass, name, phone });

    const submit = async () => {
        const data = getData();
        const user = await createUser(data);

        console.log('User was created:', user);

        close();
    };

    const onKeyDown = ({key}) => key === 'Enter' && submit();
    const onPassChange = ({target}) => setPass(target.value || '');
    const onNameChange = ({target}) => setName(target.value || '');
    const onPhoneChange = ({target}) => setPhone(target.value || '');

    const updateIsValid = useCallback(() => {
        const formData = getData();
        const isValid = utils.checkFormData(formData);

        setIsValid(isValid);
    }, [name, phone]);

    useEffect(() => {
        updateIsValid();
    }, [name, phone]);

    return (
        <div className={css.main}>
            <div className={css.line}>
                <label className={inputCss.label}>Name:</label>
                <input
                    autoFocus
                    type='text'
                    maxLength={30}
                    defaultValue={name}
                    onKeyDown={onKeyDown}
                    onChange={onNameChange}
                    className={inputCss.input}/>
            </div>
            <div className={css.line}>
                <label className={inputCss.label}>Phone:</label>
                <input
                    type='text'
                    maxLength={30}
                    defaultValue={phone}
                    onKeyDown={onKeyDown}
                    onChange={onPhoneChange}
                    className={inputCss.input}/>
            </div>
            <div className={css.line}>
                <label className={inputCss.label}>Password:</label>
                <input
                    type='text'
                    maxLength={10}
                    defaultValue={pass}
                    onKeyDown={onKeyDown}
                    onChange={onPassChange}
                    className={inputCss.input}/>
            </div>
            <Foot submit={submit} isDataValid={isValid}/>
        </div>
    );
};

const Foot = ({submit, isDataValid}:T.FootProps) =>
    <div className={css.foot}>
        <SubmitBtn submit={submit} isDataValid={isDataValid}/>
    </div>;