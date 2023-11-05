// 안입은 의상을 생각하는 것이 포인트
function solution(clothes) {
    clothes.sort();
    const clothesMap = new Map();
    clothes.forEach(e => {
        if (clothesMap.get(e[1]) !== undefined) clothesMap.set(e[1], [...clothesMap.get(e[1]), e[0]])
        else clothesMap.set(e[1], [e[0]])
    });

    let multi = 1;

    for ([key, value] of clothesMap) {
        multi = multi * (value.length + 1)
    }

    return multi - 1;
}