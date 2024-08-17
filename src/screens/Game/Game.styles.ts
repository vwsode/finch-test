import styled from 'styled-components';

import { Text } from '../../components/Text';
import { Spacing } from '../../theme';

export const TopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${Spacing.S};
  margin-bottom: ${Spacing.M};
  width: 100%;
`;

export const Poles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.L};
  margin-bottom: ${Spacing.XL};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ErrorText = styled(Text)`
  color: ${({ theme }) => theme.colors.textInvalid};
  margin-bottom: ${Spacing.S};
`;

export const ButtonIcon = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
