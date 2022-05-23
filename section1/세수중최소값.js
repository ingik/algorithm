function solution(a, b, c){
    let answer;
    
    //my code
    // answer = Math.min(a,b,c)

    //content code
    if(a<b) answer = a
    else answer = b
    if(c<b) answer = c

    return answer;
}

console.log(solution(2, 5, 1));