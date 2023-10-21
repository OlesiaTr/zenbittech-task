import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 35px 60px 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: ${theme.fontWeights.Bold};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.desert};
  margin-bottom: 20px;
`;

const DealsContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 630px);
  justify-content: center;
  gap: 10px;

  @media screen and (${theme.media.largeDesktop}) {
    grid-template-columns: repeat(auto-fit, 530px);
  }

  @media screen and (${theme.media.tablet}) {
    grid-template-columns: repeat(auto-fit, 440px);
  }

  @media screen and (${theme.media.mobile}) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`;

export { Container, DealsContainer, Title };
