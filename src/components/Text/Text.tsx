import { FC } from 'react';

import { StyledText } from './Text.style';
import { TextProps } from './Text.types';

export const Text: FC<TextProps> = ({
  children,
  variant = 'body-14-20',
  isLight = false,
  fontWeight = 400,
  className,
}) => {
  return (
    <StyledText variant={variant} isLight={isLight} fontWeight={fontWeight} className={className}>
      {children}
    </StyledText>
  );
};

Text.displayName = 'Text';
