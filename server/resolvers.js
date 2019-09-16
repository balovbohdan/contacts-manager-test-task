module.exports = {
    Query: {
        contacts: (_, args, {model}) =>
            model.contacts.getContacts(args),

        callsHistory: (_, {contactId}, {model}) =>
            model.contacts.getCallsHistory({ contactId })
    },
    Mutation: {
        call(_, {callsHistoryItem}, {model}) {
            model.contacts.call({ callsHistoryItem });

            return callsHistoryItem;
        },

        editContact: (_, {id, contact}, {model}) =>
            model.contacts.editContact({id, contact}),

        removeContact: (_, {id}, {model}) =>
            model.contacts.removeContact({ id }),

        addContact(_, {contact}, {model}) {
            model.contacts.addContact({contact});

            return contact;
        },


        createUser: (_, {pass, name, phone}, {model}) =>
            model.users.createUser({ pass, name, phone })
    }
};