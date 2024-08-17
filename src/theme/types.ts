import { Colors as StandardColors } from './standard/colors';

export enum ThemeNames {
  Standard = 'standard',
}

type Colors = typeof StandardColors;

export type StandardColorsValues = (typeof StandardColors)[keyof typeof StandardColors];

export interface ThemeType {
  colors: Colors;
}

export type ThemeNamesType = 'standard';
