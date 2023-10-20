import { styled } from 'styled-components';

import backgroundImage from '#assets/img/auth-city.jpg';
import { theme } from '#styles/theme.js';

const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--white);
`;

const Background = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;

  @media screen and (${theme.media.tablet}) {
    display: none;
  }
`;

const FormContainer = styled.div`
  flex-basis: 600px;
  height: 100%;
  overflow: auto;

  @media screen and (${theme.media.tablet}) {
    margin: 0 auto;
  }
`;

const Form = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
`;

const InnerForm = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  height: 100%;
`;

export { Background, Form, FormContainer, InnerForm, Layout };
