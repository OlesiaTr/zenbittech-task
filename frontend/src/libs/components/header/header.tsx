import { AppRoute } from '#libs/enums/enums.js';
import {
  useAppDispatch,
  useCallback,
  useLocation,
  useNavigate,
} from '#libs/hooks/hooks.js';
import { type UserAuthResponseDto } from '#packages/users/users.js';
import { actions as authActions } from '#slices/auth/auth.js';

import { Button } from '../components.js';
import { HeaderWrapper } from './header.styled.js';

type Properties = {
  user: UserAuthResponseDto | null;
};

const Header: React.FC<Properties> = ({ user }: Properties) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleLogInClick = useCallback(() => {
    navigate(AppRoute.SIGN_IN);
  }, [navigate]);

  const handleSignUpClick = useCallback(() => {
    navigate(AppRoute.SIGN_UP);
  }, [navigate]);

  const handleSignOutClick = useCallback(() => {
    void dispatch(authActions.signOut());
  }, [dispatch]);

  return (
    <HeaderWrapper>
      {pathname === AppRoute.ROOT && (
        <>
          <Button
            label="Log In"
            variant="secondary"
            onClick={handleLogInClick}
          />
          <Button
            label="Sign Up"
            variant="primary"
            onClick={handleSignUpClick}
          />
        </>
      )}

      {user && (
        <Button
          label="Sign Out"
          variant="primary"
          onClick={handleSignOutClick}
        />
      )}
    </HeaderWrapper>
  );
};

export { Header };
