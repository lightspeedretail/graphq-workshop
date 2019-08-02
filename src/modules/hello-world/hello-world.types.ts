import { gql } from 'apollo-server-core';

export const helloWorldTypDefs = gql`
  type Query {
    hello: String
  }
`;
