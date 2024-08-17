import styled, { css } from 'styled-components';

import { BorderRadius, BorderWidth, Duration, Spacing } from '../../theme';

import { StyledFieldItem } from './FieldItem.types';

const FIELD_WIDTH = 40;
const FIELD_HEIGHT = 40;

export const Root = styled.button<StyledFieldItem>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
  box-sizing: border-box;

  width: ${FIELD_WIDTH}px;
  height: ${FIELD_HEIGHT}px;

  border-width: ${BorderWidth.Small};
  border-style: solid;
  border-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.systemSelectedYellow : theme.colors.basicGray)};
  border-radius: ${BorderRadius.XL};

  box-shadow: inset 0 ${BorderWidth.Medium} 0 0 ${({ theme }) => theme.colors.basicGrayDark};

  padding: ${Spacing.M} ${Spacing.L} ${Spacing.S};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.systemSelectedYellow : 'transparent')};

  color: ${({ theme }) => theme.colors.textBlack};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      transform: scale(0.87);
      box-shadow: inset 0 ${BorderWidth.Medium} 0 0 hsla(0, 0%, 100%, 0.48);
      color: ${theme.colors.basicWhite};
    `};
  ${({ isDisabled }) => isDisabled && 'opacity: 60%; cursor: not-allowed'};

  transition-property: background-color, border-color, transform;
  transition-duration: ${Duration.DefaultInteraction}ms;
`;
