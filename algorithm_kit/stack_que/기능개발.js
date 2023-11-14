function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length > 0) {
    let count = 0;

    progresses.forEach((_, index) => {
      if (progresses[index] < 100)
        progresses[index] = progresses[index] + speeds[index];
    });

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) answer.push(count);
  }
  return answer;
}
