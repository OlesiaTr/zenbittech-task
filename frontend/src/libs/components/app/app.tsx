import { Link, RouterOutlet } from '#libs/components/components.js';
import { AppRoute } from '#libs/enums/enums.js';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
  useLocation,
} from '#libs/hooks/hooks.js';
import { actions as userActions } from '#slices/users/users.js';
import { GlobalStyle } from '#styles/global-style.js';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { users, dataStatus } = useAppSelector(({ users }) => ({
    users: users.users,
    dataStatus: users.dataStatus,
  }));

  const isRoot = pathname === AppRoute.ROOT;

  useEffect(() => {
    if (isRoot) {
      void dispatch(userActions.loadAll());
    }
  }, [isRoot, dispatch]);

  return (
    <>
      <GlobalStyle />

      <ul className="App-navigation-list">
        <li>
          <Link to={AppRoute.ROOT}>Root</Link>
        </li>
        <li>
          <Link to={AppRoute.SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={AppRoute.SIGN_UP}>Sign up</Link>
        </li>
      </ul>
      <p>Current path: {pathname}</p>

      <div>
        <RouterOutlet />
      </div>
      {isRoot && (
        <>
          <h2>Users:</h2>
          <h3>Status: {dataStatus}</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export { App };
