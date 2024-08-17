export type Field = {
  /**
   * The label displayed for the field, which helps users identify it.
   */
  label: string;
  /**
   * The total number of items (e.g., numbers) available for selection in this field.
   */
  count: number;
  /**
   * The maximum number of items that can be selected in this field.
   */
  maxSelection: number;
  /**
   * The maximum number of items that can be selected in this field.
   */
  minSelection: number;
  /**
   * The unique identifier for the field, used to reference it programmatically.
   */
  name: string;
};

export type GameProps = {
  /**
   * An array of field configurations for the game. Each field defines how many items are available for selection and other attributes.
   */
  fields: Field[];
  /**
   * An object mapping field names to arrays of selected numbers. Each key corresponds to a field, and its value is an array of selected numbers for that field.
   */
  selectedNumber: {
    [key: string]: number[];
  };
  /**
   * A callback function triggered when a number is selected or deselected in a specific field.
   * @param fieldKey - The name of the field where the selection is made.
   * @param value - The number being selected or deselected.
   */
  onSelect: (fieldKey: string, value: number) => void;
  /**
   * A callback function triggered to evaluate the current selections against the winning conditions and display the result.
   */
  onShowResult: () => void;
  /**
   * A callback function triggered to randomize the numbers for all fields according to their configurations.
   */
  onRandomize: () => void;
  /**
   * The title displayed at the top of the game interface.
   */
  title: string;
  /**
   *
   */
  error?: string;
  /**
   *
   */
  isLoading?: boolean;
};
