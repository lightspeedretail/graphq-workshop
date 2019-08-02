import { IResolvers } from 'graphql-tools';
import { Resolver } from '../../types/graphql-utils.types';
import { Product, ProductCategory } from './products.fixture';

export interface ProductResolvers extends IResolvers {
  Query: {
    products: Resolver<undefined, { name?: string }, Product[]>;
    product: Resolver<undefined, { id: string }, Product | undefined>;
    categories: Resolver<undefined, { name?: string }, ProductCategory[]>;
    category: Resolver<undefined, { id: string }, ProductCategory | undefined>;
  };
  ProductCategory: {
    products: Resolver<ProductCategory, undefined, (Product | undefined)[]>;
  };
  Mutation: {
    addProduct: Resolver<undefined, { name: string; price: number; description?: string }, Product>;
    updateProduct: Resolver<
      undefined,
      { id: string; name?: string; price?: number; description?: string },
      Product
    >;
    deleteProduct: Resolver<undefined, { id: string }, string>;
    addCategory: Resolver<undefined, { name: string; description?: string }, ProductCategory>;
    updateCategory: Resolver<
      undefined,
      { id: string; name?: string; description?: string },
      ProductCategory
    >;
    deleteCategory: Resolver<undefined, { id: string }, string>;
    addProductsToCategory: Resolver<
      undefined,
      { products: string[]; category: string },
      ProductCategory
    >;
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
    categories: (_source, args, context) => {
      if (args.name) {
        return context.dataSources.productsDataSource.getProductCategoriesByName(args.name);
      }
      return context.dataSources.productsDataSource.getProductCategories();
    },
    category: (_source, args, context) =>
      context.dataSources.productsDataSource.findProductCategory(args.id),
  },
  ProductCategory: {
    products: (category, _args, context) =>
      category.productIds
        .map(id => context.dataSources.productsDataSource.findProduct(id))
        .filter(Boolean),
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
    addCategory: (_source, category, context) =>
      context.dataSources.productsDataSource.addProductCategory({
        description: '',
        ...category,
        productIds: [],
      }),
    updateCategory: (_source, { id, ...product }, context) =>
      context.dataSources.productsDataSource.updateProductCategory(id, product),
    deleteCategory: (_source, { id }, context) => {
      context.dataSources.productsDataSource.deleteProductCategory(id);
      return id;
    },
    addProductsToCategory: (_source, { products, category }, context) => {
      const oldCategory = context.dataSources.productsDataSource.findProductCategory(category);
      if (!oldCategory) {
        throw new Error();
      }
      const productIds = [...oldCategory.productIds, ...products];
      const updatedCategory = { ...oldCategory, productIds };
      context.dataSources.productsDataSource.updateProductCategory(
        updatedCategory.id,
        updatedCategory,
      );
      return updatedCategory;
    },
  },
};
