import {Contacts} from '@lib/entities/contacts/contact/types';

import * as utils from './utils';

describe('Contacts utils', () => {
    describe('Contact finder', () => {
        it('Should find contact', () => {
            const contact = {
                id: 1,
                name: 'name',
                img: '/user.svg',
                phone: '+380961523743'
            };

            const contacts:Contacts = [contact];
            const foundContact = utils.findContact(contact.id, contacts);

            expect(foundContact).toBe(contact);
        });
    });
});