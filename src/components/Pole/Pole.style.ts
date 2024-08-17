import styled from 'styled-components';

import { Spacing } from '../../theme';

export const Root = styled.div``;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Spacing.XXS};
`;

export const TextBlock = styled.div`
  display: flex;
  gap: ${Spacing.S};
  margin-bottom: ${Spacing.S};
`;
