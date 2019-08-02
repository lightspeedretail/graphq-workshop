import { IResolvers } from 'graphql-tools';
import { Resolver } from '../../types/graphql-utils.types';

export interface HelloWorldResolvers extends IResolvers {
  Query: {
    hello: Resolver<undefined, { greeter: string }, string>;
  };
}

export const helloWorldresolvers: HelloWorldResolvers = {
  Query: {
    hello: (_source, _args, _context) => 'World',
  },
};
