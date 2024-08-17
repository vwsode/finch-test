import { FC } from 'react';

import { Text } from '../Text';

import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, rounded = false, variant = 'outline', ...props }) => {
  return (
    <StyledButton rounded={rounded} variant={variant} {...props}>
      <Text fontWeight={700}>{children}</Text>
    </StyledButton>
  );
};

Button.displayName = 'Button';
