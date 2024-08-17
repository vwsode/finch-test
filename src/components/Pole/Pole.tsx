import { FC } from 'react';

import { getCorrectEnding } from '../../helpers';
import { Text } from '../Text';

import { Grid, Root, TextBlock } from './Pole.style';
import { PoleProps } from './Pole.types';

export const Pole: FC<PoleProps> = ({ children, label, fieldToSelect }) => {
  return (
    <Root>
      <TextBlock>
        <Text variant="item-14-20">{label}</Text>
        <Text variant="item-14-20" isLight={true}>
          Отметьте {fieldToSelect} {getCorrectEnding(fieldToSelect, 'число', 'чисел', 'числа')}.
        </Text>
      </TextBlock>
      <Grid>{children}</Grid>
    </Root>
  );
};

Pole.displayName = 'Pole';
