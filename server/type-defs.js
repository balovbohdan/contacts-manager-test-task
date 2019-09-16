const {gql} = require('apollo-server');

module.exports = gql`
    type Query {
        contacts(contactsQty:Int, limit:Int):Contacts
        callsHistory(contactId:Int!):[CallsHistoryItem]
    }
    
    type Mutation {
        removeContact(id:Int!):Contact
        addContact(contact:AddContactInput!):Contact
        call(callsHistoryItem:CallInput!):CallsHistoryItem
        editContact(id:Int!, contact:EditContactInput!):Contact
    }
    
    type Contacts {
        data:[Contact]
        hasMore:Boolean
    }
  
    type Contact {
        id:Int
        tip:String
        img:String
        name:String
        phone:String
    }
    
    type CallsHistoryItem {
        id:Int
        type:Int
        time:String
        contactId:Int
    }
    
    input EditContactInput {
        tip:String
        img:String
        name:String
        phone:String
    }
    
    input AddContactInput {
        id:Int!
        tip:String
        img:String!
        name:String!
        phone:String!
    }
    
    input CallInput {
        id:Int!
        type:Int!
        time:String!
        contactId:Int!
    }
`;