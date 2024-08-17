import { Field, GameProps } from '../Game.types';

export const checkIsValid = (fields: Field[], numbers: GameProps['selectedNumber']): boolean => {
  return fields.every((field) => {
    const selectedNumbers = numbers[field.name] || [];
    return selectedNumbers.length >= field.minSelection;
  });
};
