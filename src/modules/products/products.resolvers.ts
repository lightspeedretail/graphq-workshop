import { IResolvers } from 'graphql-tools';
import { Resolver } from '../../types/graphql-utils.types';
import { Product } from './products.fixture';

// uncomment these types when needed

export interface ProductResolvers extends IResolvers {
  Query: {
    products: Resolver<undefined, undefined, Product[]>;
  };
  // Mutation: {
  //   addProduct: Resolver<undefined, { name: string; price: number; description?: string }, Product>;
  //   updateProduct: Resolver<
  //     undefined,
  //     { id: string; name?: string; price?: number; description?: string },
  //     Product
  //   >;
  //   deleteProduct: Resolver<undefined, { id: string }, string>;
  // };
}

export const productResolvers: ProductResolvers = {
  Query: {
    products: () => [],
  },
};
