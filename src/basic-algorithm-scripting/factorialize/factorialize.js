import _ from 'lodash';

/**
 * Declarative function to create factorial. Uses lodash range method.
 * TODO: Replace with custom range method
 * @param number
 * @returns {number}
 */
export const factorialize = (number) => {
  return number === 0 ? 1 : _.range(1, number + 1).reduce((acc, curr) => acc * curr);
};

/**
 * Imperative function to create factorial.
 * @param number
 * @returns {*}
 */
export const factorialize2 = (number) => {
    if(number === 0) {
        return 1;
    }else{
        let factorial = number;
        for(let i = 1; i < number; i++){
            factorial *= i;
        }
        return factorial;
    }
};
