import styled from 'styled-components';

import { BorderRadius, Spacing } from '../../theme';

const MIN_HEIGHT = 365;
const MAX_WIDTH = 420;

export const Paper = styled.div`
  padding: ${Spacing.M_NUDE};
  border-radius: ${BorderRadius.S};
  background-color: ${({ theme }) => theme.colors.basicWhite};
  min-height: ${MIN_HEIGHT}px;
  max-width: ${MAX_WIDTH}px;
`;
