import * as React from 'react';

import img from '@img/user.svg';

import * as T from './types';
import css from './Form.css';

const {useState} = React;

type Props = {
    submit:T.Submit;
};

export const Form = ({submit}:Props) => {
    const [tip, setTip] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onTipChange = ({target}) => setTip(target.value || '');
    const onNameChange = ({target}) => setName(target.value || '');
    const onPhoneChange = ({target}) => setPhone(target.value || '');

    const getData = ():T.FormData => ({ tip, img, name, phone });

    const Foot = () =>
        <div className={css.foot}>
            <SubmitBtn/>
        </div>;

    const SubmitBtn = () => {
        const onClick = () => {
            const data = getData();

            submit(data);
        };

        return (
            <div onClick={onClick} className={css.submitBtn}>
                Submit
            </div>
        );
    };

    return (
        <div className={css.main}>
            <div className={css.inputWrapper}>
                <label>Name:</label>
                <input
                    type='text'
                    maxLength={30}
                    autoFocus={true}
                    onChange={onNameChange}/>
            </div>
            <div className={css.inputWrapper}>
                <label>Phone:</label>
                <input
                    type='text'
                    maxLength={30}
                    onChange={onPhoneChange}/>
            </div>
            <div className={css.inputWrapper}>
                <label>Tip:</label>
                <input
                    type='text'
                    maxLength={30}
                    onChange={onTipChange}/>
            </div>
            <Foot/>
        </div>
    );
};