function solution(nums) {
    var answer = 0;

    const maximunLength = nums.length / 2;
    const setNums = new Set(nums);

    answer = setNums.size;

    if (maximunLength < setNums.size) answer = maximunLength;

    return answer;
}

const nums = [3,1,2,3];

console.log(solution(nums));

