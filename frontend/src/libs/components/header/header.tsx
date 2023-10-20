import { useNavigate } from 'react-router-dom';

import { AppRoute } from '#libs/enums/enums.js';
import { useCallback } from '#libs/hooks/hooks.js';

import { Button } from '../components.js';
import { HeaderWrapper } from './header.styled.js';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogInClick = useCallback(() => {
    navigate(AppRoute.SIGN_IN);
  }, [navigate]);
  const handleSignUpClick = useCallback(() => {
    navigate(AppRoute.SIGN_UP);
  }, [navigate]);

  return (
    <HeaderWrapper>
      <Button label="Log In" variant="secondary" onClick={handleLogInClick} />
      <Button label="Sign Up" variant="primary" onClick={handleSignUpClick} />
    </HeaderWrapper>
  );
};

export { Header };
