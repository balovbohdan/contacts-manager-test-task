import {T as TStorehouse} from '@storehouse';
import {T as TActions, contacts as actions} from '@storehouse/actions/contacts';

export const mapStateToProps = ({contacts}:TStorehouse.State) => ({
    contacts: contacts.contacts,
    callsHistory: contacts.callsHistory,

    needShowContactWindow: contacts.needShowContactWindow,
    needShowAddContactWindow: contacts.needShowAddContactWindow
});

export const mapDispatchToProps = dispatch => ({
    call(payload:TActions.CallPayload) {
        const action = actions.call(payload);

        dispatch(action);
    },
    addContact(payload:TActions.AddContactPayload) {
        const action = actions.addContact(payload);

        dispatch(action);
    },
    toggleContactWindow(payload?:TActions.ToggleContactWindowPayload) {
        const action = actions.toggleContactWindow(payload);

        dispatch(action);
    },
    toggleAddContactWindow() {
        const action = actions.toggleAddContactWindow();

        dispatch(action);
    }
});