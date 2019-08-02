import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { generateSchema } from './utils/generateSchema';
// import { generateDataSources } from './utils/generateDataSources';
import { generateContext } from './utils/generateContext';
import { generateDataSources } from './utils/generateDataSources';

const port = parseInt(process.env.PORT!, 10) || 3000;

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: generateSchema(),
    // @ts-ignore
    dataSources: generateDataSources(),
    context: generateContext(),
  });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
};

main();
