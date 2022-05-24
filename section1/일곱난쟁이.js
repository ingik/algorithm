function solution(arr) {
  let answer = arr;

  let sum = 0;

  answer.forEach((element) => (sum = sum + element));

  console.log(sum);

  for (let i = 0; i < answer.length - 2; i++) {
    for (let j = i + 1; j < answer.length - 1; j++) {
      console.log(arr[i], arr[j]);

      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);

        console.log(sum - (answer[i] + answer[j]));
        break;
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
