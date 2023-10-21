import { Button } from '#libs/components/components.js';
import { AppRoute } from '#libs/enums/app-route.enum.js';
import { useCallback, useNavigate } from '#libs/hooks/hooks.js';

import { Container, DescriptionContainer, Title } from './landing.styled.js';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = useCallback(() => {
    navigate(AppRoute.DEALS);
  }, [navigate]);

  return (
    <Container>
      <Title>The chemical negatively charged</Title>
      <DescriptionContainer>
        <p>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is
        </p>
      </DescriptionContainer>
      <Button
        type="button"
        label="Get Started"
        variant="landing"
        onClick={handleGetStartedClick}
      />
    </Container>
  );
};

export { Landing };
