import { FC } from 'react';

import { Spinner } from '../Spinner';
import { Text } from '../Text';

import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  children,
  rounded = false,
  variant = 'outline',
  isLoading = false,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading) onClick?.(event);
  };

  return (
    <StyledButton onClick={handleClick} rounded={rounded} variant={variant} isLoading={isLoading} {...props}>
      {isLoading ? <Spinner /> : <Text fontWeight={700}>{children}</Text>}
    </StyledButton>
  );
};

Button.displayName = 'Button';
