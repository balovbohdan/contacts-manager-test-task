import * as React from 'react';

import * as T from './types';
import * as css from './Contact.css';

export const Contact = ({contact, toggleContactWindow}:T.Props) => {
    const {id, img, name} = contact;
    const onClick = () => toggleContactWindow({ id });

    return (
        <div onClick={onClick} className={css.main}>
            <Avatar img={img}/>
            <Name name={name}/>
        </div>
    );
};

const Avatar = ({img}:T.AvatarProps) => {
    const style = {
        backgroundImage: `url(${img})`
    };

    return (
        <div className={css.avatar}>
            <div style={style} className={css.avatar_img}/>
        </div>
    );
};

const Name = ({name}:T.NameProps) =>
    <div className={css.name}>
        <p className={css.name_txt}>{name}</p>
    </div>;