export default [
    {
        param: [7, "ate", "", false, 9],
        result: [7, "ate", 9]
    },
    {
        param: ["a", "b", "c"],
        result: ["a", "b", "c"]
    },
    {
        param: [false, null, 0, NaN, undefined, ""],
        result: []
    },
    {
        param: [1, null, NaN, 2, undefined],
        result: [1, 2]
    }
]
