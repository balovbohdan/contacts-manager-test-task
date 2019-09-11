import {T} from '@storehouse';
import {T as TActions, contacts as actions} from '@storehouse/actions/contacts';

export const mapStateToProps = (state:T.State) => {
    const {contacts, showAddContactWindow} = state.contacts;

    return {
        contacts,
        showAddContactWindow
    };
};

export const mapDispatchToProps = dispatch => ({
    addContact(payload:TActions.AddContactPayload) {
        const action = actions.addContact(payload);

        dispatch(action);
    },
    toggleAddContactWindow() {
        const action = actions.toggleAddContactWindow();

        dispatch(action);
    }
});