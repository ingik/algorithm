function solution(s) {
  const strArr = Array.from(s);

  let count = 0;
  let answer = true;

  strArr.forEach((str) => {
    if (str === "(") count = count + 1;
    if (str === ")") {
      if (count <= 0) answer = false;
      else count = count - 1;
    }
  });

  if (count > 0) answer = false;
  return answer;
}
