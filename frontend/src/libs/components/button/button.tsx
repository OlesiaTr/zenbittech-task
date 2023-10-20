import { PrimaryButton, SecondaryButton } from './button.styled.js';

type Properties = {
  label: string;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
};

const Button: React.FC<Properties> = ({
  type = 'button',
  variant,
  label,
}: Properties) => {
  const buttonVariants = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
  };

  const ButtonComponent = buttonVariants[variant];

  return <ButtonComponent type={type}>{label}</ButtonComponent>;
};

export { Button };
