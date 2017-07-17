/**
 * Sum all numbers function implementation
 *
 * Imperative style
 * @param numbers
 * @return {number}
 */
export const sumAllNumbers = (numbers) => {
    const min = Math.min.apply(null, numbers);
    const max = Math.max.apply(null, numbers);

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

