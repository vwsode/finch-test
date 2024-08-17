import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Font, FontSize, LineHeight } from './theme';

const defaultText = css`
  font-family: ${Font.Default};
`;

export const Item = (fontSize: FontSize, lineHeight: LineHeight) => css`
  ${defaultText}
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  text-align: center;
`;

export const Body = (fontSize: FontSize, lineHeight: LineHeight) => css`
  ${defaultText}
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
`;

export const H2 = (fontSize: FontSize, lineHeight: LineHeight) => css`
  ${defaultText}
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
`;

export type TextType = 'item' | 'body' | 'h2';

export const Typography: Record<TextType, (fontSize: FontSize, lineHeight: LineHeight) => FlattenSimpleInterpolation> =
  {
    item: Item,
    body: Body,
    h2: H2,
  };
