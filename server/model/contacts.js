const {cloneDeep} = require('lodash');

const db = require('./db');

function call({callsHistoryItem}) {
    db.push('/callsHistory[]', callsHistoryItem);
}

function addContact({contact}) {
    db.push('/contacts[]', contact);
}

function editContact({id, contact}) {
    const contactInDb = getContact({ id });

    if (!contactInDb)
        return null;

    const contactEdited = {
        ...contactInDb,
        ...contact
    };

    removeContact({ id });

    addContact({
        contact: contactEdited
    });

    return contactEdited;
}

function removeContact({id}) {
    const contacts = getAllContacts(false);
    const index = getContactIndex(id, contacts);

    if (!~index)
        return null;

    db.delete(`/contacts[${index}]`);
    removeCallsHistory({ contactId: id });

    return contacts[index];
}

function getContact({id}) {
    const contacts = getAllContacts();

    for (let contact of contacts)
        if (contact.id === id)
            return contact;

    return null;
}

/**
 * @param {{contactsQty?:number, limit?:number}} [args]
 * @return {{hasMore:boolean, data:Object[]}}
 */
function getContacts(args = {}) {
    const def = {
        limit: 10,
        contactsQty: 0
    };

    let {contactsQty, limit} = Object.assign({}, def, args);

    const maxLimit = 20;
    const contacts = getAllContacts();

    limit = Math.min(limit, maxLimit);

    const startIndex = getNextContactIndex(contactsQty);
    const endIndex = Math.min(startIndex + limit, contacts.length);

    const resContacts = ~startIndex
        ? contacts.slice(startIndex, endIndex)
        : null;

    return {
        data: resContacts,
        hasMore: endIndex < contacts.length
    };
}

function getNextContactIndex(contactsQty = 0) {
    contactsQty = Math.max(+contactsQty || 0, 0);

    return contactsQty || 0;
}

function getCallsHistory({contactId}) {
    const data = db.getData('/callsHistory');

    return data.filter(item => item.contactId === contactId);
}

function removeCallsHistory({contactId}) {
    const filter = item => item.contactId !== contactId;

    db.filter('/callsHistory', filter);
}

/**
 * @param {number} id
 * @param {Object|null} [contacts = null]
 * @return {number}
 */
function getContactIndex(id, contacts = null) {
    contacts = contacts || getAllContacts();

    let index = -1;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            index = i;

            break;
        }
    }

    return index;
}

function getAllContacts(reverse = true) {
    const contacts = cloneDeep(db.getData('/contacts'));

    return reverse
        ? contacts.reverse()
        : contacts;
}

module.exports = {
    call,
    addContact,
    getContacts,
    editContact,
    removeContact,
    getCallsHistory
};