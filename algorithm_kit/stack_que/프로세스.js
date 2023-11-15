function solution(priorities, location) {
  let maxArr = [...priorities].sort((a, b) => b - a);
  let count = 1;

  while (priorities.length) {
    const prioritie = priorities.shift();
    if (prioritie >= maxArr[0]) {
      if (location === 0) return count;
      count = count + 1;
      maxArr.shift();
    } else {
      priorities.push(prioritie);
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
