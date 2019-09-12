import * as React from 'react';
import {connect} from 'react-redux';

import {Fader} from '@components/fader';
import {ContactsManager} from '@components/contacts-manager';

import {ContactWindow} from './ContactWindow';
import {AddContactWindow} from './AddContactWindow';

import * as T from './types';
import {mapStateToProps, mapDispatchToProps} from './redux-connect-props';

const Contacts = (props:T.ContactsProps) =>
    <Fader>
        <ContactsManager
            contacts={props.contacts}
            toggleContactWindow={props.toggleContactWindow}
            toggleAddContactWindow={props.toggleAddContactWindow}/>
        <AddContactWindow
            addContact={props.addContact}
            close={props.toggleAddContactWindow}
            active={props.needShowAddContactWindow}/>
        <ContactWindow
            call={props.call}
            contacts={props.contacts}
            callsHistory={props.callsHistory}
            close={props.toggleContactWindow}
            active={props.needShowContactWindow}/>
    </Fader>;

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);