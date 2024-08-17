import { FieldType, SelectedNumberType } from '../useGame.types';

/**
 * Generates the initial state for selected numbers based on the provided fields.
 *
 * This function creates an object where each key is a field name and its value is an empty array, representing the initial state of selections for each field.
 *
 * @param {FieldType[]} fields - An array of field configurations.
 * Each field's `name` property is used as a key in the returned object.
 *
 * @returns {SelectedNumberType} An object mapping field names to empty arrays.
 * Each key corresponds to a field name, and its value is an empty array indicating no numbers are selected initially.
 */
export const generateInitialState = (fields: FieldType[]): SelectedNumberType => {
  return fields.reduce((acc, field) => {
    acc[field.name] = [];
    return acc;
  }, {} as SelectedNumberType);
};
