import * as React from 'react';

import {T} from '@lib/contacts/contact';

import {List} from './List';
import css from './ContactsManager.css';

type Props = {
    contacts:T.Contact[];
    toggleAddContactWindow:()=>void;
};

type HeadProps = {
    toggleAddContactWindow:()=>void;
};

type AddContactBtnProps = {
    onClick:()=>void;
};

export const ContactsManager = (props:Props) => {
    const {contacts, toggleAddContactWindow} = props;

    return (
        <div className={css.main}>
            <Head toggleAddContactWindow={toggleAddContactWindow}/>
            <List contacts={contacts}/>
        </div>
    );
};

const Head = ({toggleAddContactWindow}:HeadProps) =>
    <div className={css.head}>
        <AddContactBtn onClick={toggleAddContactWindow}/>
    </div>;

const AddContactBtn = ({onClick}:AddContactBtnProps) =>
    <div onClick={onClick} className={css.addContactBtn}>
        Add contact
    </div>;