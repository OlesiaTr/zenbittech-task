import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 10px;
  height: 83px;
  padding: 0 10px;

  @media screen and (${theme.media.mobile}) {
    height: 25px;
  }
`;

const Title = styled.p`
  font-weight: ${theme.fontWeights.Bold};
  font-size: ${theme.fontSizes.xm};
  line-height: ${theme.lineHeights.contentTitle};
  color: ${theme.colors.white};

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.s};
  }
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2px;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.Bold};
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.content};
  font-family: ${theme.fontFamilies.lato};

  @media screen and (${theme.media.tablet}) {
    font-size: ${theme.fontSizes.xs};
  }

  @media screen and (${theme.media.mobile}) {
    display: none;
  }
`;

const Image = styled.img`
  max-width: 630px;
  max-height: 400px;
`;

export { Container, Description, Image, Overlay, Title };
