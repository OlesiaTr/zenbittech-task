import { PrimaryButton, SecondaryButton } from './button.styled.js';

type Properties = {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  isWidthFull?: boolean;
};

const Button: React.FC<Properties> = ({
  type = 'button',
  variant,
  label,
  isWidthFull = false,
  onClick,
}: Properties) => {
  const buttonVariants = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
  };

  const ButtonComponent = buttonVariants[variant];

  return (
    <ButtonComponent type={type} onClick={onClick} isWidthFull={isWidthFull}>
      {label}
    </ButtonComponent>
  );
};

export { Button };
