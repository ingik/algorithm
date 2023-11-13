function solution(numbers) {
  const numberArr = numbers.split("");
  let count = 0;

  function demicalCheck(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const permutation = (arr, length) => {
    const results = [];
    if (length === 1) {
      return arr.map((value) => [value]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = permutation(rest, length - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });

    return results;
  };

  const set = new Set();

  for (let i = numbers.length; i > 0; i = i - 1) {
    permutation(numberArr, i).forEach((list) => {
      set.add(parseInt(list.join("")));
    });
  }

  set.forEach((set) => {
    const isDemical = demicalCheck(set);
    if (isDemical) count = count + 1;
  });

  return count;
}
