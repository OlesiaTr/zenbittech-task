import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const PrimaryButton = styled.button`
  color: ${theme.colors.white};
  background-color: ${theme.colors.desert};
  border: ${theme.borders.none};
  padding: 12px 26px;
  width: 160px;
  height: 44px;
  font-weight: ${theme.fontWeights.Bold};
  line-height: ${theme.lineHeights.btnText};
  border-radius: 5px;
  cursor: pointer;
  transition: ${theme.transitions.main};

  /* TODO hover/focus */
`;

const SecondaryButton = styled(PrimaryButton)`
  color: ${theme.colors.desert};
  background-color: transparent;
  border: ${theme.borders.normal};
  ${theme.colors.white};

  /* TODO hover/focus */
`;

export { PrimaryButton, SecondaryButton };
