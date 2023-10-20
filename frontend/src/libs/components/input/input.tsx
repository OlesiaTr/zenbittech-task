import {
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { useFormController } from '#libs/hooks/hooks.js';

import { ErrorText, Label, StyledInput, Text } from './input.styled.js';

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  type?: 'text' | 'email';
};

const Input = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  placeholder = '',
  type = 'text',
}: Properties<T>): JSX.Element => {
  const { field } = useFormController({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  return (
    <Label>
      <Text>{label}</Text>
      <StyledInput {...field} type={type} placeholder={placeholder} />
      {hasError && <ErrorText>{error as string}</ErrorText>}
    </Label>
  );
};

export { Input };
