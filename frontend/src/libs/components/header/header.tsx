import { Button } from '../components.js';
import { HeaderWrapper } from './header.styled.js';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button label="Log In" variant="secondary" />
      <Button label="Sign Up" variant="primary" />
    </HeaderWrapper>
  );
};

export { Header };
