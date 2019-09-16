import * as React from 'react';
import {connect} from 'react-redux';

import {Fader} from '@components/fader';
import {ContactsManager} from '@components/contacts-manager';

import {ContactWindow} from './ContactWindow';
import {AddContactWindow} from './AddContactWindow';
import {EditContactWindow} from './EditContactWindow';

import * as T from './types';
import {mapStateToProps, mapDispatchToProps} from './redux-connect-props';

const Contacts = (props:T.ContactsProps) =>
    <>
        <Contents {...props}/>
        <Windows {...props}/>
    </>;

const Contents = (props:T.ContactsProps) =>
    <Fader>
        <ContactsManager
            contacts={props.contacts}
            fetchContacts={props.fetchContacts}
            hasMoreContacts={props.hasMoreContacts}
            toggleContactWindow={props.toggleContactWindow}
            toggleAddContactWindow={props.toggleAddContactWindow}/>
    </Fader>;

const Windows = (props:T.ContactsProps) =>
    <>
        <AddContactWindow
            addContact={props.addContact}
            close={props.toggleAddContactWindow}
            active={props.needShowAddContactWindow}/>
        <ContactWindow
            call={props.call}
            contacts={props.contacts}
            remove={props.removeContact}
            callsHistory={props.callsHistory}
            close={props.toggleContactWindow}
            active={props.needShowContactWindow}
            fetchCallsHistory={props.fetchCallsHistory}
            toggleEditWindow={props.toggleEditContactWindow}/>
        <EditContactWindow
            edit={props.editContact}
            contacts={props.contacts}
            close={props.toggleEditContactWindow}
            active={props.needShowEditContactWindow}/>
    </>;

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);