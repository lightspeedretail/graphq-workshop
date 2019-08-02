import { IResolvers } from 'graphql-tools';
import { Resolver } from '../../types/graphql-utils.types';

export interface HelloWorldResolvers extends IResolvers {
  Query: {
    hello: Resolver<undefined, { greeter: string }, { greeter: string }>;
  };
  HelloWorld: {
    at: Resolver<{ greeter: string }, undefined, string>;
  };
}

export const helloWorldresolvers: HelloWorldResolvers = {
  Query: {
    hello: (_source, args, _context) => ({
      greeter: args.greeter,
    }),
  },
  HelloWorld: {
    at: (_source, _args, _context) => new Date().toLocaleString(),
  },
};
