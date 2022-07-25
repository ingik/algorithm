function solution(s){  
    let answer="";

    answer = new Set(s);
 
    // return [...answer]
    return Array.from(answer).join();
}
console.log(solution("ksekkset"));