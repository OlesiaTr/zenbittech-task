import { config } from '#libs/packages/config/config.js';
import { database } from '#libs/packages/database/database.js';
import { logger } from '#libs/packages/logger/logger.js';
import { authController } from '#packages/auth/auth.js';

import { BaseServerApplication } from './base-server-application.js';
import { BaseServerApplicationApi } from './base-server-application-api.js';

const apiV1 = new BaseServerApplicationApi(
  'v1',
  config,
  ...authController.routes,
);
const serverApplication = new BaseServerApplication({
  title: 'Zenbit',
  config,
  logger,
  database,
  apis: [apiV1],
});

export { serverApplication };
export { type ServerApplicationRouteParameters } from './libs/types/types.js';
