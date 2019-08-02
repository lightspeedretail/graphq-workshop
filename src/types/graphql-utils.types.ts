import { GraphQLResolveInfo } from 'graphql';
import { MergeInfo } from 'graphql-tools';
import { ProductsDatasource } from '../modules/products/products.datasource';

export interface HospitalityDataSources {
  productsDataSource: ProductsDatasource;
}

export interface HospitalityContext {
  dataSources: HospitalityDataSources;
}

export type Resolver<TSource, TArgs, TResponse> = (
  source: TSource,
  args: TArgs,
  context: HospitalityContext,
  info: GraphQLResolveInfo & { mergeInfo: MergeInfo },
) => TResponse;
