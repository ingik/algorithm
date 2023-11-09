function solution(genres, plays) {
    var answer = [];

    let genresMap = new Map();

    for (let i = 0; i < genres.length; i++) {
        if (genresMap.get(genres[i]) === undefined) genresMap.set(genres[i], [`${plays[i]} ${i}`])
        else genresMap.set(genres[i],[...genresMap.get(genres[i]), `${plays[i]} ${i}`])
    }

    let objMap = [...genresMap].sort((a, b) => {
        let aCount = 0;
        let bCount = 0;
        for(let i = 0; i < a[1].length; i++) {
            let split = a[1][i].split(' ');
            aCount = aCount + +split[0];
        }

        for(let i = 0; i < b[1].length; i++) {
            let split = b[1][i].split(' ');
            bCount = bCount + +split[0];
        }

        return bCount - aCount;
    })

    for (let [_, value] of objMap) {
        value.sort((a, b) => {
            let aSplit = a.split(' ');
            let bSplit = b.split(' ');
            if (bSplit[0] === aSplit[0]) return aSplit[1] - bSplit[1];
            return bSplit[0] - aSplit[0]
        })
    }

    for(let [_, value] of objMap) {
        for(let i = 0; i < 2; i++) {
            if (value[i]) {
                answer = [...answer, +value[i].split(' ')[1]]
            }
        }
    }
    return answer;
}