import styled, { css } from 'styled-components';

import { BorderRadius, BorderWidth, Duration, LineHeight, Spacing } from '../../theme';

import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  gap: ${Spacing.XXS};
  justify-content: center;

  cursor: pointer;
  outline: none;
  background-color: ${({ theme }) => theme.colors.basicGrayLight};
  padding: ${Spacing.M} ${Spacing.XXL};
  border-radius: ${BorderRadius.XL};
  line-height: ${LineHeight.XXS}px;
  border: ${BorderWidth.Small} solid ${({ theme }) => theme.colors.basicGrayLight};

  transition-property: background-color, border-color, opacity;
  transition-duration: ${Duration.FastInteraction}ms;

  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textBlack};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.basicGrayDark};
    border-color: ${({ theme }) => theme.colors.basicGrayDark};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.basicGrayDarker};
    border-color: ${({ theme }) => theme.colors.basicGrayDarker};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;

    &:hover {
      background-color: ${({ theme }) => theme.colors.basicGrayLight};
      border-color: ${({ theme }) => theme.colors.basicGrayLight};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.basicGrayLight};
      border-color: ${({ theme }) => theme.colors.basicGrayLight};
    }
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.colors.basicGrayLight};
        border-color: ${({ theme }) => theme.colors.basicGrayLight};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.basicGrayLight};
        border-color: ${({ theme }) => theme.colors.basicGrayLight};
      }
    `}
`;
