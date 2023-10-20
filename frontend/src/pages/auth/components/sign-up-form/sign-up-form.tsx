import { Button, Input, Link } from '#libs/components/components.js';
import { AppRoute } from '#libs/enums/app-route.enum.js';
import { useAppForm, useCallback } from '#libs/hooks/hooks.js';
import {
  type UserSignUpRequestDto,
  userSignUpValidationSchema,
} from '#packages/users/users.js';

import { DEFAULT_SIGN_UP_PAYLOAD } from './libs/constants.js';
import {
  Container,
  Fieldset,
  Form,
  Span,
  Text,
  Title,
} from './sign-up-form.styled.js';

type Properties = {
  onSubmit: (payload: UserSignUpRequestDto) => void;
};

const SignUpForm: React.FC<Properties> = ({ onSubmit }: Properties) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignUpRequestDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: userSignUpValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form name="SignUpForm" onSubmit={handleFormSubmit}>
        <Fieldset>
          <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            name="name"
            control={control}
            errors={errors}
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            control={control}
            errors={errors}
          />
          <Input
            name="password"
            label="Password"
            errors={errors}
            control={control}
            placeholder="Enter password"
          />
        </Fieldset>
        <Button type="submit" label="Sign Up" isWidthFull variant="primary" />
        <Text>
          <Span>Already have an account? </Span>
          <Link to={AppRoute.SIGN_IN}>Log In</Link>
        </Text>
      </Form>
    </Container>
  );
};

export { SignUpForm };
