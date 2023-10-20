import { RotatingLines } from 'react-loader-spinner';

import { Container } from './loader.styled.js';

const Loader: React.FC = () => (
  <Container>
    <RotatingLines
      strokeColor="#8BAA36"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </Container>
);

export { Loader };
