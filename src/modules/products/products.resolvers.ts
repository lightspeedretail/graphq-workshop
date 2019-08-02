import { IResolvers } from 'graphql-tools';
import { Resolver } from '../../types/graphql-utils.types';
import { Product } from './products.fixture';

// uncomment these types when needed

export interface ProductResolvers extends IResolvers {
  Query: {
    products: Resolver<undefined, { name?: string }, Product[]>;
    product: Resolver<undefined, { id: string }, Product | undefined>;
  };
  Mutation: {
    addProduct: Resolver<undefined, { name: string; price: number; description?: string }, Product>;
    updateProduct: Resolver<
      undefined,
      { id: string; name?: string; price?: number; description?: string },
      Product
    >;
    deleteProduct: Resolver<undefined, { id: string }, string>;
  };
}

export const productResolvers: ProductResolvers = {
  Query: {
    products: (_source, args, context) => {
      if (args.name) {
        return context.dataSources.productsDataSource.getProductsByName(args.name);
      }
      return context.dataSources.productsDataSource.getProducts();
    },
    product: (_source, args, context) =>
      context.dataSources.productsDataSource.findProduct(args.id),
  },
  Mutation: {
    addProduct: (_source, product, context) =>
      context.dataSources.productsDataSource.addProduct({
        description: '',
        ...product,
      }),
    updateProduct: (_source, { id, ...product }, context) =>
      context.dataSources.productsDataSource.updateProduct(id, product),
    deleteProduct: (_source, { id }, context) => {
      context.dataSources.productsDataSource.deleteProduct(id);
      return id;
    },
  },
};
