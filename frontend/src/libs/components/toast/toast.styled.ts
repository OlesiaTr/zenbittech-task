import { ToastContainer } from 'react-toastify';
import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const Container = styled(ToastContainer)`
  color: ${theme.colors.black};
  font-weight: 400;
  font-size: 12px;
  font-family: Montserrat, Arial, sans-serif;
  line-height: 1.3;
  border-radius: 15px;

  --toastify-color-progress-error: red;
  --toastify-icon-color-error: red;
`;

export { Container };
