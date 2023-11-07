function solution(numbers) {
    const stringArr = numbers.map(number => {
        return `${number}`
    })
    const sort = stringArr.sort((a, b) => {
        return (b + a) - (a + b);
    });

    if (sort[0] === '0') return '0';

    return sort.join('');
}
