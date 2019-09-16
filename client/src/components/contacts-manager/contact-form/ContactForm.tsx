import * as React from 'react';

import img from '@img/user.svg';
import inputCss from '@css/input.css';
import {SubmitBtn} from '@components/modal-window';

import * as T from './types';
import css from './ContactForm.css';
import * as utils from './utils';

const {useState, useEffect, useCallback} = React;

export const ContactForm = (props:T.Props) => {
    const def = props.def || {};

    const [isValid, setIsValid] = useState(true);

    const [tip, setTip] = useState(def.tip || '');
    const [name, setName] = useState(def.name || '');
    const [phone, setPhone] = useState(def.phone || '');

    const onKeyDown = ({key}) => key === 'Enter' && submit();
    const onTipChange = ({target}) => setTip(target.value || '');
    const onNameChange = ({target}) => setName(target.value || '');
    const onPhoneChange = ({target}) => setPhone(target.value || '');

    const getData = ():T.FormData => ({ tip, img, name, phone });
    const submit = utils.createSubmit(isValid, props.submit, getData);

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
            <div className={css.inputWrapper}>
                <label className={inputCss.label}>Name:</label>
                <input
                    type='text'
                    maxLength={30}
                    autoFocus={true}
                    defaultValue={name}
                    onKeyDown={onKeyDown}
                    onChange={onNameChange}
                    className={inputCss.input}/>
            </div>
            <div className={css.inputWrapper}>
                <label className={inputCss.label}>Phone:</label>
                <input
                    type='text'
                    maxLength={30}
                    defaultValue={phone}
                    onKeyDown={onKeyDown}
                    onChange={onPhoneChange}
                    className={inputCss.input}/>
            </div>
            <div className={css.inputWrapper}>
                <label className={inputCss.label}>Tip:</label>
                <input
                    type='text'
                    maxLength={30}
                    defaultValue={tip}
                    onKeyDown={onKeyDown}
                    onChange={onTipChange}
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