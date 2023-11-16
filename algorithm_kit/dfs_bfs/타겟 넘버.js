function solution(numbers, target) {
  let cnt = 0;
  let stack = [];
  const dfs = (arr) => {
    if (stack.length === 0) {
      stack.push(arr[0]);
      stack.push(-arr[0]);
      arr.shift();
    }
    while (arr.length) {
      let empty = [];
      const shift = arr.shift();

      stack.forEach((st) => {
        empty.push(st + shift);
        empty.push(st - shift);
      });

      stack = empty;
    }
  };

  dfs(numbers);

  for (let st of stack) {
    if (st === target) cnt += 1;
  }

  return cnt;
}
