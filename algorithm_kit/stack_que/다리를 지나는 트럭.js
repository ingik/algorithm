function solution(bridge_length, weight, truck_weights) {
  let seconds = 0;

  const bridgeArr = new Array(bridge_length).fill(0);
  const resultArr = [];

  const length = [...truck_weights].length;

  while (resultArr.length !== length) {
    const bridgeSum = bridgeArr.reduce((a, b) => a + b, 0) - bridgeArr[0];

    if (weight - bridgeSum >= truck_weights[0]) {
      const twShift = truck_weights.shift();
      bridgeArr.push(twShift);
    } else {
      bridgeArr.push(0);
    }

    const brShift = bridgeArr.shift();
    if (brShift !== 0) resultArr.push(brShift);

    seconds = seconds + 1;
  }

  return seconds;
}
