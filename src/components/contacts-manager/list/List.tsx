import * as React from 'react';

import css from './List.css';
import * as T from './types';
import {Contact} from '../contact';
import {DataProvider} from './DataProvider';

export const List = ({contacts, fetchContacts, toggleContactWindow}:T.Props) =>
    <DataProvider fetchContacts={fetchContacts}>
        <div className={css.main}>
            <Items
                contacts={contacts}
                toggleContactWindow={toggleContactWindow}/>
        </div>
    </DataProvider>;

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