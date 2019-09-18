import thunk from 'redux-thunk';

import {Action} from '@storehouse';
import {CallType} from '@lib/entities/calls-history';

import * as actions from './contacts';

describe('Contacts actions', () => {
    describe('Contacts history setter', () => {
        it('Should set calls history', () => {
            const payload = {
                callsHistory: {
                    1: {
                        id: 1,
                        contactId: 1,
                        time: 1568799562129,
                        type: CallType.INCOME
                    }
                }
            };

            const expectedAction = {
                payload,
                action: Action.SET_CALLS_HISTORY
            };

            const action = actions.setCallsHistory(payload);

            expect(action).toEqual(expectedAction);
        });
    });

    describe('Contacts setter', () => {
        it('Should set contacts', () => {
            const payload = {
                hasMoreContacts: true,
                contacts: [{
                    id: 1,
                    tip: 'tip',
                    name: 'name',
                    img: '/user.svg',
                    phone: '+380971615143'
                }]
            };

            const expectedAction = {
                payload,
                action: Action.SET_CONTACTS
            };

            const action = actions.setContacts(payload);

            expect(action).toEqual(expectedAction);
        });
    });

    describe('Contact window toggler', () => {
        it('Should open window', () => {
            const payload = { id: 1 };
            const action = actions.toggleContactWindow(payload);

            const expectedAction = {
                payload,
                action: Action.TOGGLE_CONTACT_WINDOW
            };

            expect(action).toEqual(expectedAction)
        });

        it('Should close window', () => {
            const action = actions.toggleContactWindow();

            const expectedAction = {
                action: Action.TOGGLE_CONTACT_WINDOW
            };

            expect(action).toEqual(expectedAction);
        });
    });

    describe('`Add contact` window toggler', () => {
        it('Should toggle window', () => {
            const action = actions.toggleAddContactWindow();

            const expectedAction = {
                action: Action.TOGGLE_ADD_CONTACT_WINDOW
            };

            expect(action).toEqual(expectedAction);
        });
    });

    describe('`Edit contact` window toggler', () => {
        it('Should open window', () => {
            const payload = { id: 1 };
            const action = actions.toggleEditContactWindow(payload);

            const expectedAction = {
                payload,
                action: Action.TOGGLE_EDIT_CONTACT_WINDOW
            };

            expect(action).toEqual(expectedAction);
        });

        it('Should close window', () => {
            const action = actions.toggleEditContactWindow();

            const expectedAction = {
                action: Action.TOGGLE_EDIT_CONTACT_WINDOW
            };

            expect(action).toEqual(expectedAction);
        });
    });
});