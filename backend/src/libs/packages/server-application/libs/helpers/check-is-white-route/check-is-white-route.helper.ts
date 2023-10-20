import { type HTTPMethod } from '#libs/packages/http/http.js';

import { WHITE_ROUTES } from '../../constants/api.constants.js';

type Parameters = {
  path: string;
  method: HTTPMethod;
};

const checkIsWhiteRoute = ({ path, method }: Parameters): boolean =>
  WHITE_ROUTES.some((route) => {
    return (
      route.path.test(path) &&
      (route.methods as readonly HTTPMethod[]).includes(method)
    );
  });

export { checkIsWhiteRoute };
