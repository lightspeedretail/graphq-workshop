import { gql } from 'apollo-server-core';

export const productTypDefs = gql`
  type Query {
    products: [String!]!
  }
`;
