/**
 *
 * @param count
 * @param max
 * @returns
 */
export const generateRandomNumbers = (count: number, max: number): number[] => {
  if (count > max) {
    [count, max] = [max, count];
  }

  const numbers = new Set<number>();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
};
