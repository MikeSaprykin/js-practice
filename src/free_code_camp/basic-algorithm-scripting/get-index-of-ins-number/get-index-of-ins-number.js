export const getIndexOfInsertedNumber = (array, num) => {
    return array.concat(num).sort((a,b) => a - b).indexOf(num);
};
