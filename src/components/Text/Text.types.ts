import { ReactNode } from 'react';

export type TextVariant = 'item-14-20' | 'body-14-20' | 'h2-16-22';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TextProps = {
  /**
   *
   */
  children?: ReactNode;
  /**
   *
   */
  variant?: TextVariant;
  /**
   *
   */
  isLight?: boolean;
  /**
   *
   */
  fontWeight?: FontWeight;
  /**
   * 
   */
  className?: string;
};

export type StyledTextProps = {
  variant: TextVariant;
  isLight: boolean;
  fontWeight: FontWeight;
};
