import { Button, Input, Link } from '#libs/components/components.js';
import { AppRoute } from '#libs/enums/enums.js';
import { useAppForm, useCallback } from '#libs/hooks/hooks.js';
import {
  type UserSignInRequestDto,
  userSignInValidationSchema,
} from '#packages/users/users.js';

import { DEFAULT_SIGN_IN_PAYLOAD } from './libs/constants.js';
import {
  CenteredText,
  Container,
  Fieldset,
  Form,
  Span,
  Text,
  Title,
} from './sign-in-form.styled.js';

type Properties = {
  onSubmit: (payload: UserSignInRequestDto) => void;
};

const SignInForm: React.FC<Properties> = ({ onSubmit }: Properties) => {
  const { control, errors, handleSubmit } = useAppForm({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <Container>
      <Title>Login</Title>
      <Form name="SignInForm" onSubmit={handleFormSubmit}>
        <Fieldset>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
            control={control}
            errors={errors}
          />
          <Input
            name="password"
            label="Password"
            errors={errors}
            control={control}
            placeholder="Password"
          />
        </Fieldset>
        <Text>
          <Link to={AppRoute.ROOT}>Forgot password?</Link>
        </Text>
        <Button type="submit" label="Sign In" isWidthFull variant="primary" />
        <CenteredText>
          <Span>Dont have account? </Span>
          <Link to={AppRoute.SIGN_UP}>Sign Up</Link>
        </CenteredText>
      </Form>
    </Container>
  );
};

export { SignInForm };
