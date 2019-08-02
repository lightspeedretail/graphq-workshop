import { ContextFunction, Context } from 'apollo-server-core';
import { HospitalityContext } from '../types/graphql-utils.types';

export const generateContext = (): ContextFunction<
  any,
  Omit<HospitalityContext, 'dataSources'>
> => (): Context<Omit<HospitalityContext, 'dataSources'>> => {
  // If we want to provide a context to our dataSources, this would be the perfect spot to do it
  // For instance we could decode a jwt token and provide some user information in the context
  return {};
};
