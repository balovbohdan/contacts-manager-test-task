import {T as TStorehouse} from '@storehouse';
import {T as TActions, contacts as actions} from '@storehouse/actions/contacts';

export const mapStateToProps = ({contacts}:TStorehouse.State) => ({
    contacts: contacts.contacts,
    callsHistory: contacts.callsHistory,

    hasMoreContacts: contacts.hasMoreContacts,

    needShowContactWindow: contacts.needShowContactWindow,
    needShowAddContactWindow: contacts.needShowAddContactWindow,
    needShowEditContactWindow: contacts.needShowEditContactWindow
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
    fetchContacts({lastId}:TActions.FetchContactsPayload) {
        const action = actions.fetchContacts({ lastId });

        dispatch(action);
    },
    fetchCallsHistory(payload:TActions.FetchCallsHistoryPayload) {
        const action = actions.fetchCallsHistory(payload);

        dispatch(action);
    },
    editContact(payload:TActions.EditContactPayload) {
        const action = actions.editContact(payload);

        dispatch(action);
    },
    removeContact(payload:TActions.RemoveContactPayload) {
        const action = actions.removeContact(payload);

        dispatch(action);
    },
    toggleContactWindow(payload?:TActions.ToggleContactWindowPayload) {
        const action = actions.toggleContactWindow(payload);

        dispatch(action);
    },
    toggleAddContactWindow() {
        const action = actions.toggleAddContactWindow();

        dispatch(action);
    },
    toggleEditContactWindow(payload?:TActions.ToggleEditContactWindowPayload) {
        const action = actions.toggleEditContactWindow(payload);

        dispatch(action);
    }
});