import 'dotenv/config';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import users from './user.js';
import plans from './plan.js';
import claims from './claims.js';
import {getPlanSuggestion} from './aiService.js';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

//console.log(users)
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.  

 type Dependent {
    name: String
    age: Int
    relationship: String
  }

  type User{
    id: ID
    username: String!
    password: String!
    name: String
    age: Int
    gender: String
    email: String
    currentPlanId: String
    dependents: [Dependent]
    plan: [Plans]
    claims: [Claims]
    planRecommendation: String
  }

  type Plans {
        id: String
        name: String
        type: String
        status: String
        effectiveDate: String
        coverageEndDate: String
        summary: String
  }
  type Claims {
      id: String
      subjectId: String
      subjectName: String
      date: String
      description: String
      status: String
      amount: Int,
      }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getUsers(username: String!, password: String!): User!
    allUser: [User!]!
  }
`;


  // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    User: {
      plan: (user) => {
        // Add the return keyword here
        return plans.filter((plan) => plan.id == user.currentPlanId);
      },
      claims: (user) =>{
        const usersDependsIDs=user.dependents?.map((depend)=> depend.id)
        return  claims.filter((claim) => claim.subjectId == user.id || usersDependsIDs.includes(claim.subjectId))
      },
      planRecommendation: async (user) => {
        // Prepare the data to send to the AI
        const userDataForAI = {
            age: user.age,
            claims: await resolvers.User.claims(user),
            plan: await resolvers.User.plan(user),
        };
        // Call the AI service
        return getPlanSuggestion(userDataForAI);
      },
    },
    Query: {
        // Use parent, args object to access arguments
        getUsers: (parent, { username, password }) => {
          // Use find to return a single user
          return users.find((user) => user.password === password && user.username === username);
        },
        allUser: () => users
      },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);