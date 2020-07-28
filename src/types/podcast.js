//the schema for our data
/*
we have to create the custom type for our schema like this
input CreatePodcastInput{
        name:String!
        url:String!
    }
*/
const {gql} = require("apollo-server");

module.exports =gql`
    type podcast{
        id:ID!
        name:String!
        url:String!
    }

    type Query{
    podcasts:[podcast]
    }

    input CreatePodcastInput{
        name:String!
        url:String!
    }

    input UpdatePodcastInput{
        name:String
        url:String
    }

    type DeletePayload{
        id:ID!
    }

    type Mutation{
        createPodcast(input:CreatePodcastInput!):podcast!
        updatePodcast(id:ID,input:UpdatePodcastInput!):podcast!
        deletePodcast(id:ID):DeletePayload!
    }

`;


