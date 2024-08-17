import styled from 'styled-components';

import { FontSize, LineHeight } from '../../theme';
import { TextType, Typography } from '../../theme/typography';

import { StyledTextProps, TextVariant } from './Text.types';

const getTextProps = (variant: TextVariant): [TextType, FontSize, LineHeight] => {
  return variant.split('-') as [TextType, FontSize, LineHeight];
};

const getTextVariant = (variant: TextVariant) => {
  const [name, fontSize, lineHeight] = getTextProps(variant);

  return Typography[name](fontSize, lineHeight);
};

export const StyledText = styled.div<StyledTextProps>`
  ${({ variant }) => getTextVariant(variant)}
  color: inherit;
  font-weight: ${({ isLight, fontWeight }) => (isLight ? '300' : fontWeight)};
`;
