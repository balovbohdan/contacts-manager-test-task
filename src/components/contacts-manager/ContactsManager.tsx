import * as React from 'react';

import {List} from './list';
import * as T from './types';
import css from './ContactsManager.css';

export const ContactsManager = (props:T.Props) =>
    <div className={css.main}>
        <Head toggleAddContactWindow={props.toggleAddContactWindow}/>
        <List
            contacts={props.contacts}
            toggleContactWindow={props.toggleContactWindow}/>
    </div>;

const Head = ({toggleAddContactWindow}:T.HeadProps) =>
    <div className={css.head}>
        <AddContactBtn onClick={toggleAddContactWindow}/>
    </div>;

const AddContactBtn = ({onClick}:T.AddContactBtnProps) =>
    <div onClick={onClick} className={css.addContactBtn}>
        Add contact
    </div>;