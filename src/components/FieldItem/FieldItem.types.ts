import { MouseEvent } from 'react';

export type FieldItemProps = {
  /**
   *
   */
  isDisabled?: boolean;
  /**
   *
   */
  isSelected?: boolean;
  /**
   *
   */
  value: string;
  /**
   *
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type StyledFieldItem = {
  isSelected: boolean;
  isDisabled: boolean;
};
