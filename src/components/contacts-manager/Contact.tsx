import * as React from 'react';

import {T} from '@lib/contacts/contact';

import css from './Contact.css';

export type Props = T.Contact;

type AvatarProps = {
    img:string;
};

type NameProps = {
    name:string;
};

export const Contact = ({img, name}:Props) =>
    <div onClick={alert} className={css.main}>
        <Avatar img={img}/>
        <Name name={name}/>
        <ActionsBtn/>
    </div>;

const Avatar = ({img}:AvatarProps) => {
    const style = {
        backgroundImage: `url(${img})`
    };

    return (
        <div className={css.avatar}>
            <div style={style} className={css.avatar_img}/>
        </div>
    );
};

const Name = ({name}:NameProps) =>
    <div className={css.name}>
        <p className={css.name_txt}>{name}</p>
    </div>;

const ActionsBtn = () =>
    <div className={css.actionsBtn}>
        <div className={css.actionsBtn_item}/>
        <div className={css.actionsBtn_item}/>
        <div className={css.actionsBtn_item}/>
    </div>;