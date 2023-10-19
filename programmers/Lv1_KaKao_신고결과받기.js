function solution(id_list, report, k) {
    var answer = [];

    const userHash = new Map();
    const reportList = new Map();

    id_list.forEach(user => {
        userHash.set(user, '');
    })
    
    id_list.forEach(user => {
        reportList.set(user, 0);
    })

    report.forEach(list => {
        const reportActiveArr = list.split(' ');
        const isUserGet = userHash.get(reportActiveArr[0]);

        if (!isUserGet.includes(reportActiveArr[1])) {
            if (isUserGet) userHash.set(reportActiveArr[0], [...isUserGet, reportActiveArr[1]])
            else userHash.set(reportActiveArr[0], [reportActiveArr[1]]);

        const reportCount = reportList.get(reportActiveArr[1]);
        reportList.set(reportActiveArr[1], reportCount + 1);
        }


    })

    const userHashArr = Object.fromEntries(userHash);
    const reportListArr = Object.fromEntries(reportList);

    let reportedArr = [];

    for(const key in reportListArr) {
        if (reportListArr[key] > k - 1) {
            reportedArr = [...reportedArr, key];
        }
    }

    for(let userKey in userHashArr) {
        let count = 0;
        for(let reportKey in reportedArr) {
            if (userHashArr[userKey].includes(reportedArr[reportKey])) ++count;
            continue;
        }

        answer.push(count);
    } 

    return answer;
}