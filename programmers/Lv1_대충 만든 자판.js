function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    targets[i].split("").some((tg) => {
      let check = [];
      for (let keys of keymap) {
        const index = keys.indexOf(tg);

        if (index !== -1) check.push(index + 1);
      }

      const min = Math.min(...check);
      if (check.length === 0) {
        answer.push(-1);
        return true;
      }
      if (answer[i]) answer[i] = answer[i] + min;
      else answer.push(min);
      check = [];
    });
  }

  return answer;
}
