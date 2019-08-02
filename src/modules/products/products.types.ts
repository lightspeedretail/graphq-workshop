import { gql } from 'apollo-server-core';

export const productTypDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    price: Float
  }

  type Query {
    products(name: String): [Product!]!
    product(id: ID!): Product
  }
`;
