const {gql} = require('apollo-server');

module.exports = gql`
    type Query {
        contacts:[Contact]
        callsHistory:[CallsHistoryItem]
    }
  
    type Contact {
        id:Int
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
`;