import { connectionPlugin, makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';

export const schema = makeSchema({
  plugins: [
    connectionPlugin({
      typePrefix: 'Analytics',
      nexusFieldName: 'analyticsConnection',
      extendConnection: {
        // avgDuration: { type: 'Int' },
      },
    }),
    connectionPlugin({}),
  ],
  types,
  outputs: {
    typegen: join(process.cwd(), 'generated/nexus-typegne.ts'),
    schema: join(process.cwd(), 'generated/schma.graphql'),
  },
});
