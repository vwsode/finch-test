import React, { createContext, FC } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { ThemeNames, ThemeNamesType } from '../../theme';
import { getTheme } from '../../theme/utils';

export const ThemeContext = createContext<ThemeNamesType>(ThemeNames.Standard);

type ThemeProviderProps = {
  themeName: ThemeNamesType;
  children: React.ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ themeName, children }) => {
  const theme = getTheme(themeName);

  return (
    <ThemeContext.Provider value={themeName}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
