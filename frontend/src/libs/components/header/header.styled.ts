import { styled } from 'styled-components';

import { theme } from '#styles/theme.js';

const HeaderWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  height: 80px;
  background: ${theme.colors.black};
  padding-right: 80px;
`;

export { HeaderWrapper };
