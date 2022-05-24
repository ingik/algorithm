function solution(s){         
    let answer=0;
    
    for(let x of s){
        //아스키코드로 find         대문자 65 ~ 90 소문자 97 ~ 122
        let num = x.charCodeAt();
        if(num>=65 && num <= 90) answer++;

        // if(x === x.toUpperCase()) answer++
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));