import { Navigate } from 'react-router-dom';

import { AppRoute } from '#libs/enums/enums.js';
import { useAppSelector } from '#libs/hooks/hooks.js';
import { type ValueOf } from '#libs/types/types.js';

type Properties = {
  children: React.ReactNode;
  redirectPath?: ValueOf<typeof AppRoute>;
};

const ProtectedRoute: React.FC<Properties> = ({
  children,
  redirectPath = AppRoute.ROOT,
}: Properties) => {
  const { authenticatedUser } = useAppSelector(({ auth }) => ({
    authenticatedUser: auth.authenticatedUser,
  }));

  const hasUser = Boolean(authenticatedUser);

  return hasUser ? <>{children}</> : <Navigate to={redirectPath} />;
};

export { ProtectedRoute };
