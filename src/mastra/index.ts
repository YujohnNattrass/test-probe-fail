
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { DefaultStorage } from '@mastra/core/storage/libsql';

export const defaultStorage = new DefaultStorage({
  config: {
    url: "file:mastra.db",
  },
});

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
  storage: defaultStorage,
});
