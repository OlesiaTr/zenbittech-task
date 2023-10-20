import { Header, Loader, RouterOutlet } from '#libs/components/components.js';
import { DataStatus } from '#libs/enums/enums.js';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
  useNavigate,
} from '#libs/hooks/hooks.js';
import { actions as appActions } from '#slices/app/app.js';
import { actions as authActions } from '#slices/auth/auth.js';
import { GlobalStyle } from '#styles/global-style.js';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authenticatedUserDataStatus, authenticatedUser, redirectTo } =
    useAppSelector(({ auth, app }) => ({
      authenticatedUserDataStatus: auth.authenticatedUserDataStatus,
      authenticatedUser: auth.authenticatedUser,
      redirectTo: app.redirectTo,
    }));

  const isUserAuthenticated = Boolean(authenticatedUser);

  useEffect(() => {
    if (!isUserAuthenticated) {
      void dispatch(authActions.getAuthenticatedUser());
    }
  }, [isUserAuthenticated, dispatch]);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
      dispatch(appActions.navigate(null));
    }
  }, [dispatch, navigate, redirectTo]);

  if (authenticatedUserDataStatus === DataStatus.PENDING) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />

      <Header user={authenticatedUser} />

      <div>
        <RouterOutlet />
      </div>
    </>
  );
};

export { App };
