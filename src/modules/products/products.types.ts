import { gql } from 'apollo-server-core';

export const productTypDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    price: Float
  }

  type ProductCategory {
    id: ID
    name: String
    description: String
  }

  type Query {
    products(name: String): [Product!]!
    product(id: ID!): Product
    categories(name: String): [ProductCategory!]!
    category(id: ID!): ProductCategory
  }

  type Mutation {
    addProduct(name: String!, price: Float!, description: String): Product
    updateProduct(id: ID!, name: String, price: Float, description: String): Product
    deleteProduct(id: ID!): String
    addCategory(name: String!, description: String): ProductCategory
    updateCategory(id: ID!, name: String, description: String): ProductCategory
    deleteCategory(id: ID!): String
  }
`;
