module.exports = {
    Query: {
        contacts: (_, args, {model}) =>
            model.getContacts(args),

        callsHistory: (_, {contactId}, {model}) =>
            model.getCallsHistory({ contactId })
    },
    Mutation: {
        call(_, {callsHistoryItem}, {model}) {
            model.call({ callsHistoryItem });

            return callsHistoryItem;
        },

        editContact: (_, {id, contact}, {model}) =>
            model.editContact({id, contact}),

        removeContact: (_, {id}, {model}) =>
            model.removeContact({ id }),

        addContact(_, {contact}, {model}) {
            model.addContact({contact});

            return contact;
        }
    }
};