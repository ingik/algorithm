function solution(s){
    let answer=s;

    answer = answer.replace(/A/g,'#')

    return answer;
}

let str="BANANA";
console.log(solution(str));