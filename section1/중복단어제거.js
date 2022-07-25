
            function solution(s){  
                let answer;
                
                answer = new Set(s)
                return Array.from(answer).join();
            }
            let str=["good", "time", "good", "time", "student"];
            console.log(solution(str));