import { Dispatch, SetStateAction } from 'react';

/**
 * Represents a mapping of field names to arrays of selected numbers.
 * Each key is a field name (string), and its value is an array of numbers that have been selected for that field.
 */
export type SelectedNumberType = {
  [key: string]: number[];
};

export type FieldType = {
  /**
   * The unique identifier for the field.
   */
  name: string;
  /**
   * A human-readable label for the field.
   */
  label: string;
  /**
   * The total number of numbers to generate or consider for this field.
   */
  count: number;
  /**
   * The maximum number of selections allowed for this field.
   */
  maxSelection: number;
  /**
   * The minimum number of selections.
   */
  minSelection?: number;
};

export type WinningConditions = {
  /**
   * Specifies the conditions for winning based on selected numbers in each field.
   *
   * Each key is a field name, and its value is an object containing:
   * minCount - The minimum number of matches required to meet the winning condition for the field.
   * maxCount (optional) - The maximum number of matches allowed to meet the winning condition for the field.
   * If not provided, there is no upper limit.
   */
  [fieldName: string]: {
    minCount: number;
    maxCount?: number;
  };
};

export type UseGameProps = {
  /**
   * An array of `FieldType` objects, each representing a field used in the game.
   */
  fields: FieldType[];
  /**
   * An array of `WinningConditions` objects, each specifying the conditions for winning.
   */
  winningConditions: WinningConditions[];
  /**
   * A callback function that is invoked when the result of the game is determined.
   */
  onWin?: (isTicketWon: boolean) => void;
};

export type UseGameReturns = {
  /**
   * A boolean indicating whether the current selections meet the winning conditions.
   */
  isWin: boolean;
  /**
   * An object mapping field names to arrays of selected numbers.
   */
  selectedNumber: SelectedNumberType;
  /**
   * A function to handle the selection or deselection of a number in a specific field.
   */
  handleSelect: (fieldKey: string, value: number) => void;
  /**
   * A function to randomize the numbers for all fields according to their configurations.
   */
  handleRandomize: () => void;
  /**
   * A function to evaluate the current selections against the winning conditions and update `isWin`.
   */
  handleShowResult: () => void;
  /**
   * An error message.
   */
  error: string;
  /**
   * A function to setError.
   */
  setError: Dispatch<SetStateAction<string>>;
  /**
   *
   */
};
