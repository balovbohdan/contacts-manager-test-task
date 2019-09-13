import * as React from 'react';
import classnames from 'classnames';

import img from '@img/user.svg';

import * as T from './types';
import css from './Form.css';

const {useState, useEffect, useCallback} = React;

export const Form = (props:T.Props) => {
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
    const submit = createSubmit(isValid, props.submit, getData);

    const updateIsValid = useCallback(() => {
        const formData = getData();
        const isValid = checkFormData(formData);

        setIsValid(isValid);
    }, [name, phone]);

    useEffect(() => {
        updateIsValid();
    }, [name, phone]);

    return (
        <div className={css.main}>
            <div className={css.inputWrapper}>
                <label>Name:</label>
                <input
                    type='text'
                    maxLength={30}
                    autoFocus={true}
                    defaultValue={name}
                    onKeyDown={onKeyDown}
                    onChange={onNameChange}/>
            </div>
            <div className={css.inputWrapper}>
                <label>Phone:</label>
                <input
                    type='text'
                    maxLength={30}
                    defaultValue={phone}
                    onKeyDown={onKeyDown}
                    onChange={onPhoneChange}/>
            </div>
            <div className={css.inputWrapper}>
                <label>Tip:</label>
                <input
                    type='text'
                    maxLength={30}
                    defaultValue={tip}
                    onKeyDown={onKeyDown}
                    onChange={onTipChange}/>
            </div>
            <Foot submit={submit} isDataValid={isValid}/>
        </div>
    );
};

const Foot = ({submit, isDataValid}:T.FootProps) =>
    <div className={css.foot}>
        <SubmitBtn submit={submit} isDataValid={isDataValid}/>
    </div>;

const SubmitBtn = ({submit, isDataValid}:T.SubmitBtnProps) => {
    const className = classnames({
        [css.submitBtn]: true,
        [css.submitBtn__disabled]: !isDataValid
    });

    return <div onClick={submit} className={className}>Submit</div>;
};

const createSubmit = (isDataValid:boolean, submit:T.Submit, getData:T.DataGetter) =>
    () => {
        if (!isDataValid) return;

        const data = getData();

        submit(data);
    };

const checkFormData = ({name, phone}:T.FormData):boolean =>
    !!(name && phone);