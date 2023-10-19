function solution(players, callings) {
    let answer = [];

    const hashSet = new Map();

    players.forEach((list, index) => {
        hashSet.set(list, index);
    })

    callings.forEach(list => {
        const currentIndex = hashSet.get(list);
        const prevKey = players[currentIndex - 1];

        players[currentIndex - 1] = players[currentIndex];
        players[currentIndex] = prevKey;
        hashSet.set(list, currentIndex - 1);
        hashSet.set(prevKey, currentIndex);
    })
    
    answer = players;
    return answer;
}


const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log( 'RESULT ', solution(players, callings))