export default [
    {
        param: [[1, 2, 3], 2],
        result: [3]
    },
    {
        param: [[1, 2, 3], 0],
        result: [1, 2, 3]
    },
    {
        param: [["burgers", "fries", "shake"], 1],
        result: ["fries", "shake"]
    },
    {
        param: [[1, 2, "chicken", 3, "potatoes", "cheese", 4], 5],
        result: ["cheese", 4]
    }
]
