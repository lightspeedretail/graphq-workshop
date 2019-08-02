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

  type Mutation {
    addProduct(name: String!, price: Float!, description: String): Product
    updateProduct(id: ID!, name: String, price: Float, description: String): Product
    deleteProduct(id: ID!): String
  }
`;
