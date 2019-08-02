import { HospitalityDataSources } from '../types/graphql-utils.types';
import { ProductsDatasource } from '../modules/products/products.datasource';

export const generateDataSources = () => (): HospitalityDataSources => {
  return {
    productsDataSource: new ProductsDatasource(),
  };
};
