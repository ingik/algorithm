function solution(citations) {
    var answer = 0;
  
    const cLength = citations.length;
    
    for (let i = 0; i < cLength; i++) {
      let overCount = 0;
      citations.forEach(citation => {
        if (citation > i) overCount = overCount + 1;
      });
  
      if (i >= overCount){
        answer = i;
        break;
      }
      
      if (cLength === overCount) {
        answer = overCount;
      }
    }
  
    return answer;
  }