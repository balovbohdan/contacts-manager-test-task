import * as React from 'react';

import * as T from './types';
import {Contact} from '../contact';
import css from './List.css';

export const List = ({contacts, toggleContactWindow}:T.Props) =>
    <div className={css.main}>
        <Items
            contacts={contacts}
            toggleContactWindow={toggleContactWindow}/>
    </div>;

const Items = ({contacts, toggleContactWindow}:T.ItemsProps) => {
    const mapper = contact =>
        <Item
            key={contact.id}
            contact={contact}
            toggleContactWindow={toggleContactWindow}/>;

    const items = Object.values(contacts).map(mapper);

    return <>{items}</>;
};

const Item = ({contact, toggleContactWindow}:T.ItemProps) =>
    <Contact
        contact={contact}
        toggleContactWindow={toggleContactWindow}/>;