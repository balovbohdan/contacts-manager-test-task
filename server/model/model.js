const {JsonDB} = require('node-json-db');
const {Config} = require('node-json-db/dist/lib/JsonDBConfig');

const init = require('./initializer');

const config = new Config('DB', true, false, '/');
const db = new JsonDB(config);

init(db);

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
    const contacts = getContacts();
    const index = getContactIndex({ id });

    if (!~index)
        return null;

    db.delete(`/contacts[${index}]`);
    removeCallsHistory({ contactId: id });

    return contacts[index];
}

function getContactIndex({id}) {
    let index = -1;
    const contacts = getContacts();

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            index = i;

            break;
        }
    }

    return index;
}

function getContact({id}) {
    const contacts = getContacts();

    for (let contact of contacts)
        if (contact.id === id)
            return contact;

    return null;
}

function getContacts() {
    return db.getData('/contacts');
}

function getCallsHistory({contactId}) {
    const data = db.getData('/callsHistory');

    return data.filter(item => item.contactId === contactId);
}

function removeCallsHistory({contactId}) {
    const filter = item => item.contactId !== contactId;

    db.filter('/callsHistory', filter);
}

module.exports = {
    call,
    addContact,
    getContacts,
    editContact,
    removeContact,
    getCallsHistory
};