// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestModel01, Home } = initSchema(schema);

export {
  TestModel01,
  Home
};