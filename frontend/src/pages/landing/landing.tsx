import { Button } from '#libs/components/components.js';

import { Container, DescriptionContainer, Title } from './landing.styled.js';

const Landing: React.FC = () => {
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
      <Button type="button" label="Get Started" variant="landing" />
    </Container>
  );
};

export { Landing };
