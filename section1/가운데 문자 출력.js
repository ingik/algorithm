function solution(s) {
  let answer;
    if(s.length%2 == 1) {
        answer=s.slice(s.length/2 , s.length/2 + 1)
    }
    if(s.length%2 == 0) {
        answer=s.slice(s.length/2 - 1,s.length/2 + 1)
    }
  return answer;
}
console.log(solution("studdy"));
