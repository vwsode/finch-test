import styled, { keyframes } from 'styled-components';

import { BorderRadius, BorderWidth } from '../../theme';

const spinnerAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }

  50%{
    transform: rotate(90deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const SPINNER_WIDTH = 20;
const SPINNER_HEIGHT = 20;

export const Spinner = styled.span`
  width: ${SPINNER_WIDTH}px;
  height: ${SPINNER_HEIGHT}px;
  display: inline-flex;
  border-style: solid;
  border-width: ${BorderWidth.Medium};
  border-color: ${({ theme }) =>
    `${theme.colors.basicGray} ${theme.colors.basicGray} ${theme.colors.basicGrayDark} ${theme.colors.basicGrayDark}`};
  border-radius: ${BorderRadius.Circular};
  animation: ${spinnerAnimation} 0.8s linear infinite;
`;
