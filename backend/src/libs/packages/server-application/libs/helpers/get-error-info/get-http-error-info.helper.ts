/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ServerErrorType } from '#libs/enums/enums.js';
import { type HTTPError } from '#libs/packages/http/http.js';

import { type ErrorInfo } from '../../types/types.js';

const getHttpErrorInfo = (error: HTTPError): ErrorInfo => {
  return {
    status: error.status,
    internalMessage: `[HTTP Error]: ${error.status} — ${error.message}`,
    response: {
      message: error.message,
      errorType: ServerErrorType.COMMON,
    },
  };
};

export { getHttpErrorInfo };
