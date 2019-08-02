import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema, IResolvers } from 'graphql-tools';
import { GraphQLSchema, DocumentNode } from 'graphql';
import { helloWorldTypDefs } from '../modules/hello-world/hello-world.types';
import { helloWorldresolvers } from '../modules/hello-world/hello-world.resolvers';
import { productTypDefs } from '../modules/products/products.types';
import { productResolvers } from '../modules/products/products.resolvers';

export const generateSchema = (): GraphQLSchema => {
  const typeDefs: DocumentNode[] = [
    // Here should come all the type definitions that we want to use in our application
    helloWorldTypDefs,
    productTypDefs,
  ];
  const resolvers: IResolvers[] = [
    // Here should come all the resolvers that we want to use in our application
    helloWorldresolvers,
    productResolvers,
  ];
  const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypes(typeDefs),
    resolvers: mergeResolvers(resolvers),
  });

  return schema;
};
