import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.span`
  font-weight: ${theme.fontWeights.Bold};
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 48px;
  margin-top: 5px;
  padding: 14px 0 14px 19px;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fontFamilies.lato};
  background: ${theme.colors.platinum};
  border: ${theme.borders.medium} transparent;
  border-radius: 5px;
  outline: none;
`;

const ErrorText = styled.span`
  color: red; // TODO color
  min-height: 20px;
  margin-top: 5px;
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fontFamilies.lato};
`;

export { ErrorText, Label, StyledInput, Text };
