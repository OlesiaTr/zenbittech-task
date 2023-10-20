import {
  Background,
  Form,
  FormContainer,
  InnerForm,
  Layout,
} from './auth-layout.styled.js';

type Properties = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Properties> = ({ children }: Properties) => {
  return (
    <Layout>
      <Background></Background>
      <FormContainer>
        <Form>
          <InnerForm>{children}</InnerForm>
        </Form>
      </FormContainer>
    </Layout>
  );
};

export { AuthLayout };
