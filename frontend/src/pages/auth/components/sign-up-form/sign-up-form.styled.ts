import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h2`
  align-self: flex-start;
  font-weight: ${theme.fontWeights.Bold};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  border: ${theme.borders.none};
  margin-bottom: 62px;
`;

const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.Medium};
  font-family: ${theme.fontFamilies.lato};
  margin: 10px 0 30px;
  text-align: center;
  cursor: pointer;
  color: ${theme.colors.desert};

  /* TODO hover/focus/transition */
`;

const Span = styled.span`
  color: ${theme.colors.black};
  cursor: auto;
  margin: 10px 0 0;
`;

export { Container, Fieldset, Form, Span, Text, Title };
