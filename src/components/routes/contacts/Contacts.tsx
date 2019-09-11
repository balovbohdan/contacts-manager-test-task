import * as React from 'react';
import {connect} from 'react-redux';

import {Contact} from '@lib/contacts/contact/types';
import {AddContact} from '@storehouse/actions/contacts/types';

import {Fader} from '@components/fader';
import {ContactsManager} from '@components/contacts-manager';

import {CallsHistory} from './CallsHistory';
import {AddContactWindow} from './AddContactWindow';

import {mapStateToProps, mapDispatchToProps} from './redux-connect-props';

type Props = {
    contacts:Contact[];
    showAddContactWindow:boolean;

    addContact:AddContact;
    toggleAddContactWindow:()=>void;
};

const Contacts = (props:Props) => {
    const {toggleAddContactWindow} = props;

    return (
        <Fader>
            <ContactsManager
                contacts={props.contacts}
                toggleAddContactWindow={toggleAddContactWindow}/>
            <AddContactWindow
                addContact={props.addContact}
                close={toggleAddContactWindow}
                active={props.showAddContactWindow}/>
            <CallsHistory active={true}/>
        </Fader>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);