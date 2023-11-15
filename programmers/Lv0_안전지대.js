function solution(board) {
  let count = 0;
  let answer = Array.from(Array(board.length), () =>
    new Array(board.length).fill(0)
  );

  let safeZone = Array.from(Array(board.length + 2), () =>
    new Array(board.length + 2).fill(0)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        safeZone[i + 1][j + 1] = 1;
        safeZone[i + 2][j + 1] = 1;
        safeZone[i][j + 1] = 1;
        safeZone[i + 1][j + 2] = 1;
        safeZone[i + 1][j] = 1;
        safeZone[i][j + 2] = 1;
        safeZone[i + 2][j] = 1;
        safeZone[i][j] = 1;
        safeZone[i + 2][j + 2] = 1;
      }
    }
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (safeZone[i + 1][j + 1] === 0) count++;
    }
  }

  return count;
}
