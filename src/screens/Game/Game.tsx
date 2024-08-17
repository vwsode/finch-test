import { FC } from 'react';

import { Button } from '../../components/Button';
import { FieldItem } from '../../components/FieldItem';
import { Pole } from '../../components/Pole';
import { Text } from '../../components/Text';
import { Icon } from '../../icons';

import { Bottom, ButtonIcon, ErrorText, Poles, TopTitle } from './Game.styles';
import { GameProps } from './Game.types';
import { checkIsValid } from './helpers/checkIsValid';

export const Game: FC<GameProps> = ({
  selectedNumber,
  onSelect,
  onShowResult,
  onRandomize,
  fields,
  title,
  error,
  isLoading = false,
}) => {
  const isValid = !checkIsValid(fields, selectedNumber);

  return (
    <>
      <TopTitle>
        <Text variant="h2-16-22">{title}</Text>
        <ButtonIcon onClick={onRandomize}>
          <Icon type="magic-wand" size={20} />
        </ButtonIcon>
      </TopTitle>
      <Poles>
        {fields.map((field, index) => (
          <Pole key={index} label={field.label} fieldToSelect={field.maxSelection}>
            {Array.from({ length: field.count }, (_, i) => {
              const value = i + 1;
              const numbers = selectedNumber[field.name];
              const isSelected = numbers.includes(value);
              const isDisabled = numbers.length === field.maxSelection && !isSelected;

              return (
                <FieldItem
                  key={i + 1}
                  value={value.toString()}
                  isSelected={isSelected}
                  isDisabled={isDisabled}
                  onClick={() => onSelect(field.name, i + 1)}
                />
              );
            })}
          </Pole>
        ))}
      </Poles>
      <Bottom>
        {error && <ErrorText variant="item-14-20">{error}</ErrorText>}
        <Button isLoading={isLoading} disabled={isValid} onClick={onShowResult}>
          Показать результат
        </Button>
      </Bottom>
    </>
  );
};

Game.displayName = 'Game';
