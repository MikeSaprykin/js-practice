export default [
    {
        param: ['abc', 3],
        result: 'abcabcabc'
    },
    {
        param: ['*', 3],
        result: '***'
    },
    {
        param: ['abcd', 4],
        result: 'abcdabcdabcdabcd'
    },
    {
        param: ['abcd', -4],
        result: ''
    }
]
