function solution(answers) {
    let answer = [];

    let person1 = 0;
    let person2 = 0;
    let person3 = 0;

    const pick1 = [1, 2, 3, 4, 5];
    const pick2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(let i = 0; i < answers.length; i++) {
        if (pick1[i % pick1.length] === answers[i]) person1++;
        if (pick2[i % pick2.length] === answers[i]) person2++;
        if (pick3[i % pick3.length] === answers[i]) person3++;
    }

    const persons = [person1, person2, person3];
    const maxCount = Math.max(...persons);

    persons.forEach((per, index) => {
        if (per === maxCount) answer = [...answer, index + 1];
    });

    return answer;
}
