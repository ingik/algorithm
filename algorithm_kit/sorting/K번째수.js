function solution(array, commands) {
    return commands.map(command => {
        let sliceArr = array.slice(command[0] - 1, command[1]);
        sliceArr.sort((a,b) => a - b);
        return sliceArr[command[2] - 1];
    })
}