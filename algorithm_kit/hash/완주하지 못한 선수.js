function solution(participant, completion) {

    let answer = "";

    const participantMap = new Map();

    for (let p of participant) {
        participantMap.set(p, participantMap.get(p) + 1 || 1);
    }

    for (let c of completion) {
        if (participantMap.get(c) === 1) participantMap.delete(c)
        else participantMap.set(c, participantMap.get(c) - 1) 
    }

    for (let [key, _] of participantMap) {
       answer = key;
    }

    return answer
}