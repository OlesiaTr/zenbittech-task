import {
  LandingButton,
  PrimaryButton,
  SecondaryButton,
} from './button.styled.js';

type Properties = {
  label: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'landing';
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
    landing: LandingButton,
  };

  const ButtonComponent = buttonVariants[variant];

  return (
    <ButtonComponent type={type} onClick={onClick} isWidthFull={isWidthFull}>
      {label}
    </ButtonComponent>
  );
};

export { Button };
