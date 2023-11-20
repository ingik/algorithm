function solution(brown, yellow) {
  const arr = [];

  const sum = brown + yellow;

  for (let i = 0; i <= sum; i++) {
    if (sum % i === 0) arr.unshift(i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if ((arr[i] - 2) * (arr[j] - 2) === yellow) return [arr[i], arr[j]];
    }
  }
}
