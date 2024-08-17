import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'outline';

export type ButtonProps = {
  /**
   *
   */
  children?: ReactNode;
  /**
   *
   */
  rounded?: boolean;
  /**
   *
   */
  variant?: ButtonVariant;
  /**
   *
   */
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = {
  /**
   *
   */
  rounded: boolean;
  /**
   *
   */
  variant: ButtonVariant;
  /**
   *
   */
  isLoading: boolean;
};
