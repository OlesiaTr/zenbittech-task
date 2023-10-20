/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ServerErrorType } from '#libs/enums/enums.js';
import { type AuthError } from '#libs/exceptions/exceptions.js';

import { type ErrorInfo } from '../../types/types.js';

const getAuthErrorInfo = (error: AuthError): ErrorInfo => {
  return {
    status: error.status,
    internalMessage: `[Auth Error]: ${error.status} — ${error.message}`,
    response: {
      message: error.message,
      errorType: ServerErrorType.AUTHORIZATION,
    },
  };
};

export { getAuthErrorInfo };
