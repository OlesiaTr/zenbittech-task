import { breakpointMobile, breakpointTablet, FontWeight } from './variables.js';

const colors = {
  black: '#172234',
  onyx: '#000000',
  white: '#ffffff',
  desert: '#b29f7e',
  'desert-70': 'rgb(178 159 126 / 70%)',
  platinum: '#e0e0e0',
};

const fontWeights: typeof FontWeight = FontWeight;

const fontSizes = {
  xs: '14px',
  s: '16px',
  m: '18px',
  xm: '20px',
  l: '24px',
  xl: '28px',
  sb: '64px',
};

const fontFamilies = {
  lato: 'Lato, sans-serif',
  merriweather: 'Merriweather, serif',
};

const letterSpacings = {
  subheader: '-0.48px',
};

const lineHeights = {
  title: '1.21',
  content: '1.22',
  display: '1.25',
  subheader: '1.33',
  btnText: '1.37',
  label: '1.42',
  input: '1.57',
  contentTitle: '1.7',
};

const borders = {
  none: 'none',
  normal: '1px solid',
  medium: '2px solid',
};

const media = {
  mobile: `max-width: ${breakpointMobile}px`,
  tablet: `max-width: ${breakpointTablet}px`,
};

const transitions = {
  main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const theme = {
  colors,
  media,
  fontWeights,
  fontSizes,
  letterSpacings,
  lineHeights,
  borders,
  transitions,
  fontFamilies,
};

export { theme };
