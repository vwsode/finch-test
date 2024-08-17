import { FC } from 'react';

import { Text } from '../../components/Text';

import { TopTitle } from './Result.styles';

export const Result: FC = () => {
  return (
    <>
      <TopTitle>
        <Text variant="h2-16-22">Билет 1</Text>
      </TopTitle>
      <Text variant="body-14-20" isLight={true}>
        Ого, вы выиграли! Поздравляем!
      </Text>
    </>
  );
};

Result.displayName = 'Result';
