import styled, { css } from 'styled-components';

import { IconProps } from './types';

export const IconWrapper = styled.i<IconProps>`
  ${({ size, fill }) => css`
    display: inline-block;
    line-height: 0;
    width: ${size}px;
    height: ${size}px;
    color: ${fill};
  `}
`;
