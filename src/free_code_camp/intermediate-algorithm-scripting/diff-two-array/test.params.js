export default [
    {
        param: [[1, 2, 3, 5], [1, 2, 3, 4, 5]],
        result: [4]
    },
    {
        param: [
            ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]
        ],
        result: ["pink wool"]
    },
    {
        param: [
            ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]
        ],
        result: ["pink wool", "diorite"]
    },
    {
        param: [
            [1, "calf", 3, "piglet"],
            [7, "filly"]
        ],
        result: [1, "calf", 3, "piglet", 7, "filly"]
    }
]
