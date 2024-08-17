import { FC } from 'react';

import { Text } from '../Text';

import { Root } from './FieldItem.style';
import { FieldItemProps } from './FieldItem.types';

export const FieldItem: FC<FieldItemProps> = ({ value, onClick, isSelected = false, isDisabled = false }) => {
  return (
    <Root isSelected={isSelected} onClick={onClick} isDisabled={isDisabled}>
      <Text variant="item-14-20" fontWeight={isSelected ? 700 : 400}>
        {value}
      </Text>
    </Root>
  );
};

FieldItem.displayName = 'FieldItem';
