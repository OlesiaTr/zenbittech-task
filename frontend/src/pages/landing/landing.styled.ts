import { styled } from 'styled-components';

import backgroundImage from '#assets/img/landing-city.jpg';
import { theme } from '#styles/theme.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  background:
    linear-gradient(rgba(0 0 0 / 60%), rgba(0 0 0 / 60%)),
    no-repeat url(${backgroundImage});
  background-size: cover;
`;

const Title = styled.p`
  font-weight: ${theme.fontWeights.Bold};
  font-size: ${theme.fontSizes.sb};
  line-height: ${theme.lineHeights.display};
  color: ${theme.colors.white};
  margin-bottom: 10px;
  text-align: center;

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.xxxl};
  }

  @media screen and (${theme.media.mobile}) {
    font-size: ${theme.fontSizes.xxl};
  }
`;

const DescriptionContainer = styled.div`
  font-size: ${theme.fontSizes.l};
  font-family: ${theme.fontFamilies.lato};
  color: ${theme.colors.white};
  max-width: 822px;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (${theme.media.desktop}) {
    max-width: 80%;
  }

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.m};
  }

  @media screen and (${theme.media.mobile}) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export { Container, DescriptionContainer, Title };
