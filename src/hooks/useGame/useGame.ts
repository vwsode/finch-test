import { useState } from 'react';

import { generateRandomNumbers } from '../../helpers';

import { generateInitialState } from './helpers';
import { ErrorMessage } from './useGame.constants';
import { SelectedNumberType, UseGameProps, UseGameReturns } from './useGame.types';

/**
 * Custom hook for managing game state, including handling number selections,
 * randomizing numbers, and checking win conditions.
 */
export const useGame = ({ fields, winningConditions, onWin }: UseGameProps): UseGameReturns => {
  const [isWin, setIsWin] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedNumber, setSelectedNumber] = useState<SelectedNumberType>(generateInitialState(fields));

  const handleSelect = (fieldKey: string, value: number) => {
    setSelectedNumber((prev) => {
      const currentSelection = prev[fieldKey] || [];
      const field = fields.find((f) => f.name === fieldKey);
      if (!field) return prev;

      const { maxSelection } = field;

      if (currentSelection.includes(value)) {
        return {
          ...prev,
          [fieldKey]: currentSelection.filter((num) => num !== value),
        };
      } else if (currentSelection.length < maxSelection) {
        return {
          ...prev,
          [fieldKey]: [...currentSelection, value],
        };
      }
      return prev;
    });
  };

  const handleRandomize = () => {
    const newSelection: SelectedNumberType = fields.reduce((acc, field) => {
      const { name, count, maxSelection } = field;
      acc[name as keyof SelectedNumberType] = generateRandomNumbers(count, maxSelection);
      return acc;
    }, {} as SelectedNumberType);

    setSelectedNumber(newSelection);
  };

  const handleShowResult = async () => {
    const winningNumbers = fields.reduce((acc, field) => {
      const { name, count, maxSelection } = field;
      acc[name] = generateRandomNumbers(count, maxSelection);
      return acc;
    }, {} as SelectedNumberType);

    const isWin = winningConditions.some((condition) => {
      return Object.entries(condition).every(([fieldName, { minCount, maxCount }]) => {
        const selectedNumbers = selectedNumber[fieldName] || [];
        const winningFieldNumbers = winningNumbers[fieldName] || [];

        const count = selectedNumbers.filter((num) => winningFieldNumbers.includes(num)).length;

        if (maxCount) {
          return count >= minCount && count <= maxCount;
        }

        return count >= minCount;
      });
    });

    if (!isWin) {
      setError(ErrorMessage.WRONG_COMBINATION);
    }

    try {
      if (isWin && onWin) {
        await onWin(isWin);
      }
      setIsWin(isWin);
    } catch (error) {
      if (error instanceof Error) {
        setError(isWin ? `Победа! ${ErrorMessage.WRONG_RESPONSE}` : '');
      }
    }
  };

  return {
    isWin,
    selectedNumber,
    handleSelect,
    handleRandomize,
    handleShowResult,
    error,
    setError,
  };
};
