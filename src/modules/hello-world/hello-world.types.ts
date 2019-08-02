import { gql } from 'apollo-server-core';

export const helloWorldTypDefs = gql`
  type HelloWorld {
    greeter: String
    at: String
  }

  type Query {
    hello(greeter: String): HelloWorld
  }
`;
