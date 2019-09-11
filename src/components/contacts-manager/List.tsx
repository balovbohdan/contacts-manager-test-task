import * as React from 'react';

import {T} from '@lib/contacts/contact';

import {Contact} from './Contact';
import css from './List.css';

type Props = {
    contacts:T.Contact[];
};

type ItemsProps = {
    contacts:T.Contact[];
};

export const List = ({contacts}:Props) =>
    <div className={css.main}>
        <Items contacts={contacts}/>
    </div>;

const Items = ({contacts}:ItemsProps) => {
    const mapper = ({id, img, name, phone}) => {
        id = id || name + phone;

        return <Contact id={id} key={id} img={img} name={name} phone={phone}/>;
    };

    const items = contacts.map(mapper);

    return <>{items}</>;
};