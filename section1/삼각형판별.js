function solution(a, b, c){
    let answer="YES", max;

    //my code
    let MaxNum = Math.max(a,b,c)
    let sum = a + b + c

    if(MaxNum >= sum - MaxNum) answer = "NO"

    return answer
}

console.log('1 : '+solution(6, 7, 11));
console.log('2 : '+solution(13, 33, 17));