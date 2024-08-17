/**
 *
 * @param number
 * @param singular
 * @param pluralGenitive
 * @param pluralNominative
 * @returns
 */
export function getCorrectEnding(
  number: number,
  singular: string,
  pluralGenitive: string,
  pluralNominative: string,
): string {
  if (number % 10 === 1 && number % 100 !== 11) {
    return singular;
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return pluralNominative;
  } else {
    return pluralGenitive;
  }
}
