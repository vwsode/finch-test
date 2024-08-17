import { FC } from 'react';

import { Global } from './GlobalStyles.style';
import { GlobalStylesProps } from './GlobalStyles.types';

export const GlobalStyles: FC<GlobalStylesProps> = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  );
};

GlobalStyles.displayName = 'GlobalStyles';
