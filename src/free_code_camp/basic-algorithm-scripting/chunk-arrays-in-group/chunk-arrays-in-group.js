export const chunkArraysInGroup = (array, size) => {
    var resultArr = [];
    var i = 0;
    while(i < array.length){
        resultArr.push(array.slice(i, i+size));
        i += size;
    }
    return resultArr;
};
